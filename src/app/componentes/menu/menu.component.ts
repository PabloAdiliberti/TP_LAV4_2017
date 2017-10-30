import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private Route:ActivatedRoute,private router: Router) 
  {
    var personaGuardada = localStorage.getItem("miUsuario");
    var persona = JSON.parse(personaGuardada);
  }

  ngOnInit() {
  }

  OpcionMenu(Opcion:string)
  {
    switch(Opcion)
   {
      case 'menu':
      this.router.navigate(['/menu']);   
      break;  
      case 'agilidad':
      this.router.navigate(['/agilidad']);
      break;
      case 'adivina':
      this.router.navigate(['/adivina']);     
      break;
      case 'estAdivina':
      this.router.navigate(['/estadisticaAdivina']);     
      break;
      case 'estAgilidad':
      this.router.navigate(['/estadisticaAgilidad']);     
      break;
    }

 }


}
