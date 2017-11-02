import { Component, OnInit } from '@angular/core';
import { Juego} from '../../Clase/juego';
import { Adivina} from '../../Clase/adivina';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-adivina',
  templateUrl: './adivina.component.html',
  styleUrls: ['./adivina.component.css']
})
export class AdivinaComponent implements OnInit {

  miJuego: Adivina;
  filtrado : any;


  constructor(private localStorageService: LocalStorageService,private router: Router) 
  {
   
    var user = localStorage.getItem("miUsuario");
    var personaGuardada = JSON.parse(user);
    this.miJuego = new Adivina("Adivina el numero",personaGuardada.nombre);

  }

  ngOnInit() {
  }



  Salir()
  {
    this.router.navigate(['/menu']);
  }

}
