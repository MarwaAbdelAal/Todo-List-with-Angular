import { Component } from '@angular/core';

type Todo = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number
};

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {

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

  todoTask: string = '';

  addTodo(): void {
    if (this.todoTask) {
      let todoId = 0;
      if(!this.todos.length){
        todoId = 1;
      }
      else{
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

  deleteTodo(id: number): void {
    const todoIndex = this.todos.findIndex((todo: Todo) => todo.id === id);
    this.todos.splice(todoIndex, 1);
  }

  completeTodo(id: number): void {
    this.todos.find((todo: Todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
    });
  }
}
