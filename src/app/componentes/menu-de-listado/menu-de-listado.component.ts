import { Component, OnInit } from '@angular/core';
import{Juego} from '../../Clase/juego';
import { ListadoService } from '../../servicios/listado.service';

@Component({
  selector: 'app-menu-de-listado',
  templateUrl: './menu-de-listado.component.html',
  styleUrls: ['./menu-de-listado.component.css']
})
export class MenuDeListadoComponent implements OnInit {
  
  listadoParaCompartir: any[];
  miServicio:ListadoService;

  constructor() 
  {
     this.miServicio = new ListadoService();
     this.listadoParaCompartir = this.miServicio.listar();
  }

  ngOnInit() {
  }

}
