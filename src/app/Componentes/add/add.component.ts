import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  pendientesCambios: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  tieneCambiosPendientes() {
    return this.pendientesCambios;
  }
  notengoPendiente() {
    this.pendientesCambios = false;
  }
}
