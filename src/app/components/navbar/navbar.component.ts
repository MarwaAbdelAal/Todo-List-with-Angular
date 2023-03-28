import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { NavbarService } from 'src/app/services/navbar.service';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user!: User;
  todos: Todo[] = [];
  isLoggedIn = false;
  loggedInUsername!: string;
  numOfCompletedTodos: number = 0;
  numOfDeletedTodos: number = 0;
  numOfFavouriteTodos: number = 0;
  subsTodos: Todo[] = []

  constructor(private _router: Router, public nav: NavbarService, private _users: UsersService, private _todos: TodosService) {
    this._users.loggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    })
    this._users.loggedInUsername$.subscribe((res) => {
      this.loggedInUsername = res;
    })
    this._todos.subsTodos$.subscribe((res) => {
      let completed = 0;
      let favourite = 0;
      let userTodos = 0;
      let deleted = 0;
      res.forEach((todo: Todo) => {
        if (todo.userId === this._users.getUserData().id) {
          userTodos++;
        }
        if (todo.completed && todo.userId === this._users.getUserData().id) {
          completed++;
        }
        if (todo.favourite && todo.userId === this._users.getUserData().id) {
          favourite++;
        }
        if (todo.deleted && todo.userId === this._users.getUserData().id) {
          deleted++;
        }
      })
      this.numOfCompletedTodos = Math.floor(completed / userTodos * 100) | 0;
      this.numOfFavouriteTodos = favourite;
      this.numOfDeletedTodos = deleted;
    });

    this.user = this._users.getUserData();
    this.todos = this._todos.getUserTodos(this.user.id);
  }

  getAllTodos() {
    this._router.navigate(['todos']);
  }

  getCompletedTodos() {
    this._router.navigate(['todos', 'completed']);
  }

  getDeletedTodos() {
    this._router.navigate(['todos', 'deleted']);
  }

  getFavouriteTodos() {
    this._router.navigate(['todos', 'favourites']);
  }

  logout() {
    this._users.logout();
    this._router.navigate(['login']);
  }
}
