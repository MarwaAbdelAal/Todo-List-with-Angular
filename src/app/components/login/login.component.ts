import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nameInput: string = '';
  quoteInput: string = '';
  user!: User;

  constructor(private _auth: AuthService, private _router: Router) {
    this.user = this._auth.user;
  }

  onLogin() {
    this._auth.createUser(this.nameInput, this.quoteInput);
    
    this._router.navigate(['todos']);
  }

}
