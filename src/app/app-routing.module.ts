import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { DeletedTodosComponent } from './components/deleted-todos/deleted-todos.component';
import { FavTodosComponent } from './components/fav-todos/fav-todos.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "todos", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "todos/completed", component: CompletedTodosComponent },
  { path: 'todos', component: TodosComponent,
    children: [
      { path: 'completed', component: CompletedTodosComponent },
      { path: 'favourites', component: FavTodosComponent },
      { path: 'deleted', component: DeletedTodosComponent },
    ]
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
