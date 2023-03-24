import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-fav-todos',
  templateUrl: './fav-todos.component.html',
  styleUrls: ['./fav-todos.component.css']
})
export class FavTodosComponent {

  @Input() todo!: Todo;

  todos: Todo[];

  constructor(private _todos: TodosService) {
    this.todos = this._todos.getFavouriteTodos();
  }

}
