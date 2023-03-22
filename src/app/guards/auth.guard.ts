import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isLogged: boolean = true;

  constructor(private _router: Router, private _users: UsersService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this._users.isLoggedIn()) {
      return true;
    }
    alert('You have not logged in');
    this._router.navigate(['login']);
    return false;
  }

}
