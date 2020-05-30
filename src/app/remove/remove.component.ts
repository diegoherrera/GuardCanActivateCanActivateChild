import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent implements OnInit {

  identificador1: number;
  identificador2: number;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      if (parametros['id'] != null) {
        this.identificador1 = parametros['id'];
        console.log(" Llego el identificador " + this.identificador1);
      }
      if (parametros['id1'] != null) {
        this.identificador2 = parametros['id1'];
        console.log(" Llego el identificador " + this.identificador2);
      }
    });
  }

}
