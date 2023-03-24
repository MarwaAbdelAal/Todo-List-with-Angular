import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { TodoDetailsComponent } from './components/todo-details/todo-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FavTodosComponent } from './components/fav-todos/fav-todos.component';
import { DeletedTodosComponent } from './components/deleted-todos/deleted-todos.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CompletedTodosComponent } from './components/completed-todos/completed-todos.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    TodoComponent,
    TodoDetailsComponent,
    NavbarComponent,
    FooterComponent,
    FavTodosComponent,
    DeletedTodosComponent,
    NotFoundComponent,
    CompletedTodosComponent,
    SignUpComponent,
    ContactUsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
