import { Component, OnInit } from '@angular/core';
import { Agilidad} from '../../Clase/agilidad';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-agilidad',
  templateUrl: './agilidad.component.html',
  styleUrls: ['./agilidad.component.css']
})
export class AgilidadComponent implements OnInit {

  miJuego: Agilidad;
  constructor(private router: Router) 
  {
  
    var user = localStorage.getItem("miUsuario");
    var personaGuardada = JSON.parse(user);
    this.miJuego = new Agilidad("Agilidad aritmetica",personaGuardada.nombre);
  }

  ngOnInit() {
  }

  Salir()
  {
    this.router.navigate(['/menu']);
  }

}
