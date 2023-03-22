import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nameInput: string = '';
  quoteInput: string = '';
  user!: User;

  constructor(private _users: UsersService, private _router: Router) {
    this.user = this._users.user;
  }

  onLogin() {
    this._users.createUser(this.nameInput, this.quoteInput);
    this._router.navigate(['/todos']);
  }

}
