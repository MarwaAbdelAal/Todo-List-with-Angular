import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todos: Todo[] = [];
  deletedTodos: Todo[] = [];

  addTodo(todoTask: string, userId: number): void {
    let todoId = 0;
    this.todos = this.getAllTodos();
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
      "deleted": false,
      "userId": userId
    }
    this.todos.push(newTask);
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  // TODO: add Modal before delete
  deleteTodo(id: number): void {
    const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
    const deletedTodo = this.todos.find((todo: Todo) => todo.id === id);
    if (deletedTodo) {
      this.deletedTodos.push(deletedTodo);
      this.todos.splice(todoIndex, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      localStorage.setItem('deletedTodos', JSON.stringify(this.deletedTodos));
    }
  }

  completeTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  favouriteTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.favourite = !todo.favourite;
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getUserTodos(userId: number): Todo[] {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    this.todos = this.todos.filter((todo) => todo.userId === userId)    
    return this.todos;
  }

  getAllTodos(): Todo[] {
    this.todos = JSON.parse(localStorage.getItem('todos') || '[]');
    return this.todos;
  }
  getFavouriteTodos(): Todo[] {
    return this.todos.filter((todo: Todo) => todo.favourite);
  }
  getCompletedTodos(): Todo[] {
    return this.todos.filter((todo: Todo) => todo.completed);
  }
  getDeletedTodos(): Todo[] {
    this.deletedTodos = JSON.parse(localStorage.getItem('deletedTodos') || '[]');
    return this.deletedTodos;
  }

  getFavouriteTodosLength(): number {
    return this.getFavouriteTodos().length;
  }
  getCompletedTodosLength(): number {
    return this.getCompletedTodos().length;
  }
  getDeletedTodosLength(): number {
    return this.getDeletedTodos().length;
  }

  removeDeletedTodos(): void {
    localStorage.removeItem('deletedTodos');
  }

}
