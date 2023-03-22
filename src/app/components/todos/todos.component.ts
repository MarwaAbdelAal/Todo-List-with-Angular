import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  currentUrl: string = ''

  constructor(private _users: UsersService, private _todos: TodosService, private _router: Router) {
    const user = this._users.getUserData();
    if (!user) {
      this._router.navigate(['login'])
      return;
    }
    this.user = user;

    this.todos = this._todos.todos;

  }
  
  addTodo(): void {
    if (this.todoTask) {
      this._todos.addTodo(this.todoTask);
      this.todoTask = '';
    console.log(this.currentUrl);

    }
  }

  logout() {
    localStorage.removeItem('user');
    this._router.navigate(['login']);
  }
}
