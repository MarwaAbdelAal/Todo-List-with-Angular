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

  isLoggedIn = false;
  user!: User;
  todos: Todo[] = [];
  todosLength: number = 0;

  deletedTodosLength: number = 0;
  completedTodosLength: number = 0;
  favTodosLength: number = 0;

  constructor(private _router: Router, public nav: NavbarService, private _users: UsersService, private _todos: TodosService) {
    this._users.loggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    })
    this.user = this._users.getUserData();
    this.todos = this._todos.getUserTodos(this.user.id);
  }

  ngOnInit() {
    this.completedTodosLength = this._todos.getCompletedTodosLength();
    this.deletedTodosLength = this._todos.getDeletedTodosLength();
    this.favTodosLength = this._todos.getFavouriteTodosLength();
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
