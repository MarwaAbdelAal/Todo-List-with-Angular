import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpTodosService {

  constructor(private _http: HttpClient) { }

  getAllTodos() {
    return this._http.get('https://dummyjson.com/todos');
  }

  getTodoDetailsById(id: number) {
    return this._http.get(`https://dummyjson.com/todos/${id}`);
  }

}
