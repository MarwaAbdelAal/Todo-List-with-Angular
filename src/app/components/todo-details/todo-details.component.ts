import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from 'src/app/models/todo';
import { HttpTodosService } from 'src/app/services/http-todos.service';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent {

  @Input() todo!: Todo;
  mySubscribtion!: Subscription

  constructor(private _activatedRoute: ActivatedRoute, private _http: HttpTodosService, private _todos: TodosService) {
  }

  ngOnInit() {
    this.mySubscribtion = this._http.getTodoDetailsById(this._activatedRoute.snapshot.params['id'])
      .subscribe((res) => console.log(res)
      )
  }

  deleteTodo(id: number): void {
    this._todos.deleteTodo(id);
  }

  completeTodo(id: number): void {
    this._todos.completeTodo(id);
  }

  favouriteTodo(id: number): void {
    this._todos.favouriteTodo(id);
  }

  ngOnDestroy() {
    this.mySubscribtion.unsubscribe();
  }
}
