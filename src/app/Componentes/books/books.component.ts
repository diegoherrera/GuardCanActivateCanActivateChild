import { Component, OnInit } from '@angular/core';
import { Books } from '../../Entidades/Books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public actores: Books[];
  public profile: any;

  constructor(private router: Router) {     

  }

  ngOnInit(): void {
    this.profile = JSON.parse(localStorage.getItem('profile'));
  }


  update(id) {
     console.log(id);
     this.router.navigate(['/detail', id]);
  }
  cerrarSession() {
    console.log('paso por aqui');
    localStorage.setItem('isLogin', 'false');
    this.router.navigate(['/login']);
  }

}
