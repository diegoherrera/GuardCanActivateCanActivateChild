import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CargarmodulosGuard implements CanLoad {
  constructor(private router: Router) {
  }

  canLoad(route: Route): boolean {
    let url: string = route.path;
    console.log('Url:' + url);
    if (localStorage.getItem('isLogin') == 'true') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
