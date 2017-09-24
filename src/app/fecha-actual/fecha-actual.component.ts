import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.css']
})
export class FechaActualComponent implements OnInit {

  hoy: any = new Date();
  ciudad: string = "Xalapa";
  resultado: number = 1.123;
  dolareuro: number = 0.94;
  nombre: string = "Laura";
  sexo: string = 'mujer';
  encabezamiento: any = { 'hombre':'Estimado', 'mujer':'Estimada' }
  constructor() { }

  ngOnInit() {
  }

}
