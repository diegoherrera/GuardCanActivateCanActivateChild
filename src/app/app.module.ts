import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
import { ErrorComponent } from './error/error.component';
import { RemoveComponent } from './remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DetailComponent,
    AddComponent,
    ErrorComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
