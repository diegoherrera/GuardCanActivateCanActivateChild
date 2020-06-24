import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/Entidades/LoginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datos: LoginRequest;

  constructor(private router: Router) { 
    this.datos = new LoginRequest("","");
  }
 

  ngOnInit(): void {
    
  }

  login() {
    console.log(JSON.stringify(this.datos));
    localStorage.setItem('profile', JSON.stringify({ Nombre: 'Diego' , Apellido: 'Herrera'}));
    localStorage.setItem('isLogin', 'true');
    this.router.navigate(['/books']);
  }

}
