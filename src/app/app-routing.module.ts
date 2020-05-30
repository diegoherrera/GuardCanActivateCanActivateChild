import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from './error/error.component';
import { RemoveComponent } from './remove/remove.component';


const routes: Routes = [
{ path: 'books', component: BooksComponent },
{ path: 'detail/:id', component: DetailComponent },	
{ path: 'remove/:id/:id1', component: RemoveComponent },		  
{ path: 'add', component: AddComponent },
{ path: '', redirectTo: '/books', pathMatch: 'full' },
{ path: '**', component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
