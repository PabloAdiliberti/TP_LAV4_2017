import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estadistica-adivina',
  templateUrl: './estadistica-adivina.component.html',
  styleUrls: ['./estadistica-adivina.component.css']
})
export class EstadisticaAdivinaComponent implements OnInit {

  constructor()
    {

    }

  ngOnInit() {

    
  }

  listaDejugadores : any;

  settings = {
    columns: {
      cuit: {
        title: 'Cuit'
      },
      usuario: {
        title: 'Usuario'
      },
      email: {
        title: 'Email'
      },
      puntaje: {
        title: 'Puntaje'
      },
      fecha: {
        title: 'Fecha'
      },
      sexo: {
        title: 'Sexo'
      },
      gano: {
        title: 'Gano'
      }
    }
  };

}
