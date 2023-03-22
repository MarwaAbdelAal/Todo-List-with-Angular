import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent {

  // todo!: Todo;
  @Input() todo!: Todo;

  todos: Todo[];

  constructor(private _todos: TodosService) {
    this.todos = this._todos.todos;
  }

  completeTodo(id: number): void {
    this._todos.completeTodo(id);
  }

}
