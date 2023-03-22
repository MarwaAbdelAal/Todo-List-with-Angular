import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  // todos: Todo[] = [];
  todos: Todo[] = JSON.parse(localStorage.getItem('todos')||"");

  addTodo(todoTask: string): void {
    let todoId = 0;
    if (!this.todos.length) {
      todoId = 1;
    }
    else {
      todoId = this.todos[this.todos.length - 1].id + 1
    }

    const newTask: Todo = {
      "id": todoId,
      "todo": todoTask,
      "completed": false,
      "favourite": false,
      "userId": 1
    }
    this.todos.push(newTask);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  deleteTodo(id: number): void {
    const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
    const confirmDelete = prompt('Are you sure you want to delete this todo?');
    if (confirmDelete === 'yes'){
      this.todos.splice(todoIndex, 1);
    }
  }

  completeTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  }

  favouriteTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.favourite = !todo.favourite;
      }
    });
    console.log(this.todos);
  }

}
