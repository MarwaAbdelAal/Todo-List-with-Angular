import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  todoTask: string = '';
  user!: User;
  todos: Todo[] = [];

  constructor(private _auth: AuthService, private _router:Router) {
    const user = this._auth.getUserData();
    if (!user) {
      this._router.navigate(['login'])
      return;
    }
    this.user = user;
    this.todos = this._auth.todos;
  }

  addTodo(): void {
    if (this.todoTask) {
      let todoId = 0;
      if (!this.todos.length) {
        todoId = 1;
      }
      else {
        todoId = this.todos[this.todos.length - 1].id + 1
      }

      const newTask = {
        "id": todoId,
        "todo": this.todoTask,
        "completed": false,
        "userId": 1
      }
      this.todos.push(newTask);
      this.todoTask = '';
    }
  }
}
