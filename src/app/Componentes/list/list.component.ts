import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/Entidades/Books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) { }
  public actores: Books[];

  ngOnInit(): void {
  }
  update(id) {
    console.log(id);
    this.router.navigate(['/detail', id]);
  }
}
