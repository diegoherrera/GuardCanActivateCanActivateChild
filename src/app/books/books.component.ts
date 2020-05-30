import { Component, OnInit } from '@angular/core';
import { Actor } from '../Entidades/Actor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public actores: Actor[];
  
  constructor(private router: Router) { 

    this.actores = [
      {
        id: 1,
        actor_name: 'Peter Dinklage',
        character_name: 'Tyrion Lannister',
        gender: 'Male',
        status: 'Alive'
      },
      {
        id: 2,
        actor_name: 'Sean Bean',
        character_name: 'Ned Stark',
        gender: 'Male',
        status: 'Dead'
      },
      {
        id: 3,
        actor_name: 'Emilia Clark',
        character_name: 'Khaleesi',
        gender: 'Female',
        status: 'Alive'
      },
      {
        id: 4,
        actor_name: 'Catelyn Stark',
        character_name: 'Michelle Fairley',
        gender: 'Female',
        status: 'Dead'
      }
    ];

  }

  ngOnInit(): void {
  }

  update(id) {
     console.log(id);
     this.router.navigate(['/detail', id]);
  }

  remove(id, id1) {
    console.log(id);
    console.log(id1);
    this.router.navigate(['/remove', id, id1]);
  }
}
