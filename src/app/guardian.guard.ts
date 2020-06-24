import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot
  , UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardianGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot
    , state: RouterStateSnapshot): boolean  {
    console.log('Autorizacion');
    console.log(childRoute);
    console.log(state);
    /*
    if (localStorage.getItem('Rol')=='Administrador') {      
      return true;
    }    
    else {
      this.router.navigate(['/login']);
      return false;
    }*/
    return true;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log('paso por canactive');
      console.log(next);
      console.log(state);
    if (localStorage.getItem('isLogin')=='true') {      
      return true;
    }    
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
