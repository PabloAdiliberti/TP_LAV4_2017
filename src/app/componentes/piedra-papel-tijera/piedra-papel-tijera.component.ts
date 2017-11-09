import { Component, OnInit } from '@angular/core';
import { PPT } from '../../Clase/piedraPapelTijera';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  miJuego: PPT;
  constructor(private router: Router) {

    var user = localStorage.getItem("miUsuario");
    var personaGuardada = JSON.parse(user);
    this.miJuego = new PPT("Piedra , papel o tijera",personaGuardada.nombre);
  }

  ngOnInit() {
  }

  Salir()
  {
    this.router.navigate(['/menu']);
  }

}
