import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './Componentes/books/books.component';
import { AddComponent } from './Componentes/add/add.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './Componentes/login/login.component';
import { ListComponent } from './Componentes/list/list.component';
import { DesactivarrutaGuard } from './desactivarruta.guard';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddComponent,
    ErrorComponent,
    LoginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DesactivarrutaGuard    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
