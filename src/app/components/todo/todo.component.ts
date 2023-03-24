import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo!: Todo;

  todos: Todo[];
  currentUrl: string = ''

  constructor(private _todos: TodosService, private _router: Router) {
    this.todos = this._todos.todos;
    this.currentUrl = _router.url.split('/').pop() || '';
    console.log(this.currentUrl);
  }

  deleteTodo(id: number): void {
    this._todos.deleteTodo(id);
  }

  completeTodo(id: number): void {
    this._todos.completeTodo(id);
  }

  favouriteTodo(id: number): void {
    this._todos.favouriteTodo(id);
  }

}
