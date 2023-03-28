import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-completed-todos',
  templateUrl: './completed-todos.component.html',
  styleUrls: ['./completed-todos.component.css']
})
export class CompletedTodosComponent {

  @Input() todo!: Todo;
  user!: User
  todos!: Todo[];

  constructor(private _todos: TodosService, private _users: UsersService) {
    this.user = this._users.getUserData();
    this._todos.subsTodos$.subscribe((res) => {
      this.todos = res.filter(todo => todo.userId === this.user.id && todo.completed);
    });
  }

}
