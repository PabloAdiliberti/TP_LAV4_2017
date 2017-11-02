import { Juego } from './Juego';

export class Anagrama  extends Juego
{ 

    respuesta: string;
    ingresado: string;
    Display: string;
    respuestaArray: Array<any>;
    nombre:string;
    Jugadores: Array<any>;

    constructor(nombre:string, jugador: string) 
     { 
        super(nombre,jugador);
        this.nombre = jugador;
        this.NombreDelJuego = "Anagrama";  
        this.Jugadores = new Array<any>();
        this.respuesta = "Eduardo"; 
        this.respuestaArray=  this.respuesta.split('');
        this.Display = "Deudora"

        var user = localStorage.getItem("JugadoresGuardadosAnagrama");
        var json = JSON.parse(user);

            
        alert(json);
        if(json != null)
            this.Jugadores = json;

     }

     Verificar()
     {
        if( this.respuesta == this.ingresado)
            {
                alert("Gano");
             
                this.ingresado = "";


                var persona = {
                    Nombre: this.nombre,
                    Tiempo: this.Fin,
                    Gano: "Gano",
                    Juego: this.NombreDelJuego
                };
              
                alert(persona);
                this.Jugadores.push(persona);    
                
                alert(this.Jugadores);
                var JugadoresGuardados = JSON.stringify(this.Jugadores);

                alert(JugadoresGuardados);
                localStorage.setItem("JugadoresGuardadosAnagrama", JugadoresGuardados); 

                this.Siguiente();
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