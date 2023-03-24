import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-deleted-todos',
  templateUrl: './deleted-todos.component.html',
  styleUrls: ['./deleted-todos.component.css']
})
export class DeletedTodosComponent {

  @Input() todo!: Todo;

  todos: Todo[];

  constructor(private _todos: TodosService) {
    this.todos = this._todos.getDeletedTodos();
  }

}
