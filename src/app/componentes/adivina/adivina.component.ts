import { Component, OnInit } from '@angular/core';
import { Juego} from '../../Clase/juego';
import { Adivina} from '../../Clase/adivina';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  miJuego: Adivina;
  constructor() 
  {
    this.miJuego = new Adivina("pablo","Jugador1");
  }

  ngOnInit() {
  }

}
