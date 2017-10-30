import { Injectable } from '@angular/core';
import{Juego} from '../Clase/juego';

@Injectable()
export class ListadoService {

  constructor() { }

  public listar() : Array<Juego>
  {
   let juego1:Juego;
   let juego2:Juego;
   let juego3:Juego;
   let juego4:Juego;
   let juego5:Juego;
   let juego6:Juego;
   let miArray : Array<Juego> = new Array<Juego>();
   juego1= new Juego("pablo1","jugador1");
   juego2= new Juego("pablo2","jugador2");
   juego3= new Juego("pablo3","jugador3");
   juego4= new Juego("pablo4","jugador4");
   juego5= new Juego("pablo5","jugador5");
   juego6= new Juego("pablo6","jugador6");
   miArray.push(juego1);
   miArray.push(juego2);
   miArray.push(juego3);
   miArray.push(juego4);
   miArray.push(juego5);
   miArray.push(juego6);
   return miArray;
    
  }
}
