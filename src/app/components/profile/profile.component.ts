import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user!: User;
  todosLength: number = 0;
  joinedDate: string = '';
  todos: Todo[] = [];

  constructor(private _users: UsersService, private _todos: TodosService) {
    this.user = this._users.getUserData();
    this._todos.subsTodos$.subscribe((res) => {
      this.todos = res.filter(todo => todo.userId === this.user.id);
    });
   }

  ngOnInit() {
    this.user = this._users.getUserData();
    this.todosLength = this.todos.length;
    this.joinedDate = (new Date(this.user.joinedDate).toUTCString().toString());
  }

}
