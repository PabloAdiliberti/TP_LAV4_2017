import { Juego } from './Juego';

export class Anagrama  extends Juego
{ 

    respuesta: string;
    ingresado: string;
    Display: string;
    respuestaArray: Array<any>;
    nombre:string;
    Jugadores: Array<any>;
    Habilitado: boolean;
    Inicio:number; 
    Fin:number;

    constructor(nombre:string, jugador: string) 
     { 
        super(nombre,jugador);
        this.nombre = jugador;
        this.Habilitado = true;
        this.NombreDelJuego = "Anagrama";  
        this.Jugadores = new Array<any>();
        this.respuesta = "Eduardo"; 
        this.respuestaArray=  this.respuesta.split('');
        this.Display = "Deudora";

        var user = localStorage.getItem("JugadoresGuardadosAnagrama");
        var json = JSON.parse(user);
           
        if(json != null)
            this.Jugadores = json;

     }

     Verificar()
     {
        var respuestaUsuario=this.ingresado.toUpperCase();
        if( this.respuesta == respuestaUsuario)
            {
                if(respuestaUsuario == "NICOLAS")
                {
                    alert("Gano");
                    this.Fin = (new Date().getTime() - this.Inicio)/1000;              
                    this.ingresado = "";
                    var persona = {
                        Nombre: this.nombre,
                        Tiempo: this.Fin,
                        Gano: "Gano",
                        Juego: this.NombreDelJuego
                    };
                            
                    this.Jugadores.push(persona);           
                    var JugadoresGuardados = JSON.stringify(this.Jugadores);        
                    localStorage.setItem("JugadoresGuardadosAnagrama", JugadoresGuardados); 
                }
                this.ingresado = "";
                this.Siguiente();
            }
        else
           { 
                alert("No es la respuesta, intenta denuevo.");
                this.ingresado = "";
            }
     }

     Siguiente()
     {
         switch (this.Display) {
            case "Deudora":
                this.Display = "Matar";   
                this.respuesta = "MARTA";      
                 break;
            case "Matar":
                 this.Display = "camino";   
                 this.respuesta = "MONICA";      
                  break;
            case "camino":
                  this.Display = "riesgo";   
                  this.respuesta = "SERGIO";      
                   break;
            case "riesgo":
                   this.Display = "colinas";   
                   this.respuesta = "NICOLAS";      
                    break;
         
             default:
                 break;
         }
     }


     public GenerarNuevo()
     {
        this.Habilitado = false
        this.respuesta = "EDUARDO"; 
        this.respuestaArray=  this.respuesta.split('');
        this.Display = "Deudora";
        this.Inicio = new Date().getTime();  
     }



}