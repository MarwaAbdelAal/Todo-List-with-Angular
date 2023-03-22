import { Component, Input } from '@angular/core';
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

  constructor(private _todos: TodosService) {
    this.todos = this._todos.todos;
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
