import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  @Input() todo!: Todo;

  todos: Todo[];

  constructor(private _auth: AuthService) {
    this.todos = this._auth.todos;
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

  }

}
