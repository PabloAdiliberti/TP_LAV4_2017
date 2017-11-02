import { Component, OnInit } from '@angular/core';
import { PPT } from '../../Clase/piedraPapelTijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  miJuego: PPT;
  constructor() {
    this.miJuego = new PPT("pablo","Jugador1");
  }

  ngOnInit() {
  }

}
