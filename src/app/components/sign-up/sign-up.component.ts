import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  user!: User;

  myForm: FormGroup;

  constructor(private _users: UsersService, private _router: Router) {

    this.myForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      quote: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]),
    });
  }

  submitForm() {
    this._users.addNewUser(this.myForm.value);
    this._router.navigate(['login']);
  }
}
