import { Component, OnInit } from '@angular/core';
import { Anagrama } from '../../Clase/anagrama';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  miJuego: Anagrama;
  constructor(private router: Router) { 


    var user = localStorage.getItem("miUsuario");
    var personaGuardada = JSON.parse(user);
    this.miJuego = new Anagrama("Adivina el numero",personaGuardada.nombre);
  }

  Salir()
  {
    this.router.navigate(['/menu']);
  }

  ngOnInit() {
  }

}
