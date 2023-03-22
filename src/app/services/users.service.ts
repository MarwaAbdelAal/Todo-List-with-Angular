import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  user!: User;

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
      localStorage.setItem("user", JSON.stringify(this.user));
      console.log(this.user);
      
    }
  }

}
