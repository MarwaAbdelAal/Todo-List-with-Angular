import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { NavbarService } from 'src/app/services/navbar.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn = false;
  user!: User;

  constructor(private _router: Router, public nav: NavbarService, private _users: UsersService) {
    this._users.loggedIn$.subscribe((res) => {
      this.isLoggedIn = res;
    })
    this.user = this._users.getUserData();
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
