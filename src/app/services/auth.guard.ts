import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(state.url)
    return this.checkLogin(state.url);
  }

  checkLogin(url: string) {
    console.log(url);

    if (this.authService.isLoggedIn)

      return this.authService.isLoggedIn;
    this.authService.redirectUrl = url;
    return this.router.parseUrl('/auth/login');
  }

}
