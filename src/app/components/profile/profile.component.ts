import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user: User | undefined;
  todosLength: number = 0;
  joinedDate: string = '';

  constructor(private _users: UsersService, private _todos: TodosService) { }

  ngOnInit() {
    this.user = this._users.getUserData();
    this.todosLength = this._todos.getUserTodos.length;
    this.joinedDate = (new Date(this.user.joinedDate).toUTCString().toString());
  }

}
