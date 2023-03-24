import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _router: Router) { }

  user!: User;
  users: User[] = [];

  getAllUsers(): User[] {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    return this.users;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  isUserLoggedIn(sentEmail: string, sentPassword: string): boolean {
    const loggedUser = this.getAllUsers().find(user => user.email === sentEmail && user.password === sentPassword);

    if (!loggedUser) {
      return false
    }
    this.user = loggedUser;
    localStorage.setItem('user', JSON.stringify(this.user))
    return true;
  }

  getUserData() : User{
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    return this.user;
  }

  addNewUser(newUser: User): void {
    let userId = 0;
    this.users = this.getAllUsers();
    if (!this.users.length) {
      userId = 1;
    }
    else {
      userId = this.users[this.users.length - 1].id + 1
      const duplicatedUser = this.users.find(user => user.email === newUser.email)
      if (duplicatedUser) {
        alert('User already exists');
        return;
      }
    }

    this.users.push({ ...newUser, 'id': userId });
    localStorage.setItem('users', JSON.stringify(this.users))
  }

  logout(){
    localStorage.removeItem('user');
  }

}
