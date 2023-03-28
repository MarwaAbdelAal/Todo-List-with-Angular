import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

  subsTodos = new BehaviorSubject(this.todos);
  subsTodos$ = this.subsTodos.asObservable();

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
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.subsTodos.next(this.todos);
  }

  deleteTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.deleted = !todo.deleted;
        this.subsTodos.next(this.todos);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  completeTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.subsTodos.next(this.todos);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  favouriteTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.favourite = !todo.favourite;
        this.subsTodos.next(this.todos);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getUserTodos(userId: number): Todo[] {
    this.subsTodos.next(this.todos);
    return this.getAllTodos().filter((todo) => todo.userId === userId)
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
    return this.todos.filter(todo => todo.deleted);
  }

  removeDeletedTodos(): void {
    this.todos = this.todos.filter(todo => !todo.deleted);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    this.subsTodos.next(this.todos);
  }

}
