import { Component, OnInit } from '@angular/core';
import { Anagrama } from '../../Clase/anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  miJuego: Anagrama;
  constructor() { 


    var user = localStorage.getItem("miUsuario");
    var personaGuardada = JSON.parse(user);
    this.miJuego = new Anagrama("Adivina el numero",personaGuardada.nombre);
  }

  ngOnInit() {
  }

}
