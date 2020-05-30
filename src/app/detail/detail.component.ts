import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  identificador: number;

  constructor(private route: ActivatedRoute, private location: Location) {

  }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      if (parametros['id'] != null) {
        this.identificador = parametros['id'];
        console.log(" Llego el identificador " + this.identificador);
      }
    });
  }

}
