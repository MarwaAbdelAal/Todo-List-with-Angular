import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  todoTask: string = '';
  user!: User;
  todos: Todo[] = [];

  constructor(private _users: UsersService, private _todos: TodosService, private _router: Router) {
    this.user = this._users.getUserData();
    this.todos = this._todos.getAllTodos();
  }

  addTodo(): void {
    if (this.todoTask) {
      this._todos.addTodo(this.todoTask);
      this.todoTask = '';
    }
  }
}
