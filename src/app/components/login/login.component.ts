import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users!: User[];

  constructor(private _users: UsersService, private _router: Router) {
    this.users = this._users.users;
  }

  submitForm(form: NgForm):void {
    const loggedIn = this._users.isUserLoggedIn(form.value['email'], form.value['password']);
    if(!loggedIn){
      alert("User not found, You have to signup first");
      this._router.navigate(['signup']);
      return;
    }
    this._router.navigate(['todos']);
    form.reset();
  }

}
