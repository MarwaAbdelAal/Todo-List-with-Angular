import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _router: Router) { }

  user!: User;

  todos: Todo[] = [
    {
      "id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true,
      "userId": 26
    },
    {
      "id": 2,
      "todo": "Memorize the fifty states and their capitals",
      "completed": false,
      "userId": 48
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": false,
      "userId": 4
    },
    {
      "id": 4,
      "todo": "Contribute code or a monetary donation to an open-source software project",
      "completed": false,
      "userId": 48
    },
    {
      "id": 5,
      "todo": "Solve a Rubik's cube",
      "completed": false,
      "userId": 31
    },
  ]

  isLoggedIn() {
    return !!localStorage.getItem('user');
  }

  getUserData(): User | null {
    const found = localStorage.getItem('user');
    if (!found) {
      return null;
    }
    const { name, quote } = JSON.parse(found);
    this.user = { name, quote };
    return this.user;
  }

  createUser(name: string, quote: string): void {
    if (name && quote) {
      this.user = { name, quote };
      // this.user.push(newUser);
      localStorage.setItem("user", JSON.stringify(this.user));
    }
  }

}
