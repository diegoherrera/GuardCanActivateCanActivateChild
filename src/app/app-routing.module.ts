import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './Componentes/books/books.component';

import { AddComponent } from './Componentes/add/add.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ListComponent } from './Componentes/list/list.component';
import { GuardianGuard } from './guardian.guard';
import { DesactivarrutaGuard } from './desactivarruta.guard';

const routes: Routes = [
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [GuardianGuard],
    canActivateChild: [GuardianGuard],
    children: [
      { path: 'list', component: ListComponent },
      { path: '', component: ListComponent },
      { path: 'add', component: AddComponent, canDeactivate: [DesactivarrutaGuard] },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
