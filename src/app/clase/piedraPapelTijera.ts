import { Juego } from './Juego';

export class PPT extends Juego{

    elijioUsuario:string;
    elijioMaquina:string;
    maquina:string;
    puntosU:number;
    puntosM:number;
    empate:number;
    nombre:string;
    Jugadores: Array<any>;

    Inicio:number; 
    Fin:number; 

    constructor(nombre:string, jugador: string) 
    {    
        super(nombre,jugador);
        this.nombre = jugador;
        var user = localStorage.getItem("JugadoresGuardadosPPT");
        var json = JSON.parse(user);
        this.Jugadores = new Array<any>();
   
        if(json != null)
            this.Jugadores = json;
       
        this.NombreDelJuego = "Piedra, papel o tijera";
        this.puntosU = 0;  
        this.puntosM = 0;  
        this.empate = 0;
    }


    OpcionElegida(opcion:string)
    {
        switch (opcion) {
            case "piedra":
            this.elijioUsuario= "./assets/piedra.jpg";
            this.ElijeMaquina(); 
            this.QuienGano(opcion);
                break;
            case "papel":
            this.elijioUsuario =  "./assets/papel.jpg"; 
            this.ElijeMaquina(); 
            this.QuienGano(opcion);  
                break;
            case "tijera":
            this.elijioUsuario =  "./assets/tijera.jpg";  
            this.ElijeMaquina(); 
            this.QuienGano(opcion);
                break;
        
            default:
                break;
        }
    }

    ElijeMaquina()
    {
        var numero = Math.floor(Math.random()*3 +1);
      //  alert("numero " + numero);
        switch (numero) {
            case 1:
            this.elijioMaquina =  "./assets/piedra.jpg";
            this.maquina = "piedra";
                break;
            case 2:
            this.elijioMaquina =  "./assets/papel.jpg";
            this.maquina = "papel";
                break;
            case 3:
            this.elijioMaquina =  "./assets/tijera.jpg";
            this.maquina = "tijera";
                break;
        
            default:
                break;
        }
    }

    QuienGano(usuario:string)
    {
      //  alert(this.maquina);
        switch (usuario) {
            case "piedra":
                    if(this.maquina == "piedra")
                        this.empate++;
                    if(this.maquina == "papel")                      
                            this.puntosM++;                    
                    if(this.maquina == "tijera")                    
                        this.puntosU++;

                    this.VerificarGano();
                break;
            case "papel":
                    if(this.maquina == "piedra")                                        
                        this.puntosU++;                
                    if(this.maquina == "papel")
                        this.empate++;
                    if(this.maquina == "tijera")                  
                        this.puntosM++;
                        
                        this.VerificarGano();
                break;
            case "tijera":
                    if(this.maquina == "piedra")                  
                        this.puntosM++;                 
                    if(this.maquina == "papel")             
                        this.puntosU++;         
                    if(this.maquina == "tijera")
                        this.empate++;
                
                        this.VerificarGano();
                break;
        
            default:
                break;
        }
    }


    public GenerarNuevo()
    {
        alert("¡Iniciemos! eliga una opcion");
        this.puntosU = 0;  
        this.puntosM = 0;  
        this.empate = 0;
    }

    public VerificarGano()
    {
        if(this.puntosU == 7)
        {
            alert("Gano");
            var persona = {
                Nombre: this.nombre,
                Gano: "Gano",
                Juego: this.NombreDelJuego
            };
              
            this.Jugadores.push(persona);   
               
            var JugadoresGuardados = JSON.stringify(this.Jugadores);  
         
            localStorage.setItem("JugadoresGuardadosPPT", JugadoresGuardados); 
            this.GenerarNuevo();
        }
        if(this.puntosM == 7)
        {
            alert("Perdio");
            this.GenerarNuevo();
        }
    }

}