import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isLoggedIn:boolean = false;

  constructor(private _router: Router, public nav: NavbarService, private _users:UsersService) {
    this.isLoggedIn = this._users.isLoggedIn();
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
