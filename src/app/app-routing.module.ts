import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DeletedTodosComponent } from './components/deleted-todos/deleted-todos.component';
import { FavTodosComponent } from './components/fav-todos/fav-todos.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: "", redirectTo: "todos", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "contactus", component: ContactUsComponent },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuard] },
  { path: 'todos/completed', component: CompletedTodosComponent, canActivate: [AuthGuard] },
  { path: 'todos/favourites', component: FavTodosComponent, canActivate: [AuthGuard] },
  { path: 'todos/deleted', component: DeletedTodosComponent, canActivate: [AuthGuard] },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
