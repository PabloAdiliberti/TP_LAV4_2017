import { Juego } from './Juego';

export class Anagrama  extends Juego
{ 

    respuesta: string;
    ingresado: string;
    Display: string;
    respuestaArray: Array<any>;

    constructor()
     { 
        super("pablo","jugador1");
        // this.NombreDelJuego = "Anagrama";
        
        this.respuesta = "Eduardo"; 
        this.respuestaArray=  this.respuesta.split('');
        this.Display = "Deudora"
        // Afinar = Francia
        // Deudora = Eduardo
        // Marta = matar
        // Mónica = camino
        
        // Pedro = poder
        
        // Santiago = agonista
        
        // Susana = saunas
        
        // Teresa = aretes
        // Sergio = riesgo
        
        // Nicolás = colinas
        
        // Álvaro = valora
        

     }

     Verificar()
     {
        if( this.respuesta == this.ingresado)
            {
                alert("Gano");
                this.Siguiente();
                this.ingresado = "";
            }
        else
           { 
               alert("Perdio");
               this.ingresado = "";
            }
     }

     Siguiente()
     {
         switch (this.Display) {
            case "Deudora":
                this.Display = "Matar";   
                this.respuesta = "Marta";      
                 break;
            case "Matar":
                 this.Display = "camino";   
                 this.respuesta = "Monica";      
                  break;
            case "camino":
                  this.Display = "riesgo";   
                  this.respuesta = "Sergio";      
                   break;
            case "riesgo":
                   this.Display = "colinas";   
                   this.respuesta = "Nicolas";      
                    break;
         
             default:
                 break;
         }
     }



}