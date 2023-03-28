import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { User } from 'src/app/models/user';
import { HttpTodosService } from 'src/app/services/http-todos.service';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

  todoTask: string = '';
  user!: User;
  todos: Todo[] = [];
  mySubscribtion!: Subscription

  constructor(private _users: UsersService, private _todos: TodosService, private _http: HttpTodosService) {
    this.user = this._users.getUserData();
    this.todos = this._todos.getUserTodos(this.user.id);
  }

  ngOnInit() {
    this.mySubscribtion = this._http.getAllTodos().subscribe((res) => {
      console.log(res);
    })

  }

  addTodo(): void {
    if (this.todoTask) {
      this._todos.addTodo(this.todoTask, this.user.id);
      this.todos = this._todos.getUserTodos(this.user.id);
      this.todoTask = '';
    }
  }

  ngOnDestroy() {
    this.mySubscribtion.unsubscribe();
  }

}
