import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  todos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');
  deletedTodos: Todo[] = JSON.parse(localStorage.getItem('deletedTodos') || '[]');

  numOfCompletedTodos = new BehaviorSubject(this.getCompletedTodos().length / this.todos.length);
  numOfCompletedTodos$ = this.numOfCompletedTodos.asObservable();
  
  numOfFavouriteTodos = new BehaviorSubject(this.getFavouriteTodos().length);
  numOfFavouriteTodos$ = this.numOfFavouriteTodos.asObservable();

  numOfDeletedTodos = new BehaviorSubject(this.getDeletedTodos().length);
  numOfDeletedTodos$ = this.numOfDeletedTodos.asObservable();

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

  deleteTodo(id: number): void {
    const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
    const deletedTodo = this.todos.find((todo: Todo) => todo.id === id);
    if (deletedTodo) {
      this.deletedTodos.push(deletedTodo);
      this.todos.splice(todoIndex, 1);
      localStorage.setItem('todos', JSON.stringify(this.todos));
      localStorage.setItem('deletedTodos', JSON.stringify(this.deletedTodos));
      this.numOfDeletedTodos.next(this.getDeletedTodos().length);
    }
  }

  completeTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        this.numOfCompletedTodos.next(this.getCompletedTodos().length / this.todos.length);
      }
    });
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  favouriteTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.favourite = !todo.favourite;
        this.numOfFavouriteTodos.next(this.getFavouriteTodos().length);
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

  removeDeletedTodos(): void {
    localStorage.removeItem('deletedTodos');
    this.numOfDeletedTodos.next(this.getDeletedTodos().length);
  }

}
