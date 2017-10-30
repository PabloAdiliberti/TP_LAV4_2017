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
    this.miJuego = new Anagrama();
  }

  ngOnInit() {
  }

}
