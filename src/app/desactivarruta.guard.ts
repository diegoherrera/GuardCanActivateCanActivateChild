import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot
  , UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AddComponent } from './Componentes/add/add.component';

@Injectable()
export class DesactivarrutaGuard implements CanDeactivate<AddComponent> {
  
  constructor() {
  }
  canDeactivate(component: AddComponent
    , currentRoute: ActivatedRouteSnapshot
    , currentState: RouterStateSnapshot
    , nextState?: RouterStateSnapshot): boolean  {
      console.log('Desactivar Rutas')
      console.log(currentRoute);
      console.log(currentState);
      console.log(nextState);
      let url: string = currentState.url;
      console.log('Url: '+ url);
      if(component.tieneCambiosPendientes()){
        return window.confirm('tienes cambios pendientes quieres salir ?');
      }      
      return true;
  } 
}
