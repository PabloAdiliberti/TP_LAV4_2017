import { Juego } from './Juego';

export class Adivina extends Juego{
    NumeroSecreto: number;
    NumeroIngresado: number;
    Inicio:number; 
    Fin:number; 
    nombre:string;
    

    Jugadores: Array<any>;
    
    constructor(nombre:string, jugador: string) 
    { 
   
        super(nombre,jugador);
        this.nombre = jugador;
        this.NombreDelJuego = nombre;
        this.NumeroSecreto = null;
        this.Jugadores = new Array<any>();

        var user = localStorage.getItem("JugadoresGuardados");
        var json = JSON.parse(user);

            
        if(json != null)
            this.Jugadores = json;
        //alert(user);
        //alert(personaGuardada);

    }

    public GenerarNuevo():void
    {
    this.NumeroSecreto = Math.floor(Math.random()*100+1);
    console.info("Numero: ", this.NumeroSecreto);
    this.Inicio = new Date().getTime();   
    this.Gano = false;           
    }

    public Verificar()
    {
        if(this.NumeroIngresado==this.NumeroSecreto)
            {
                this.Gano= true;   
                this.Fin = Math.floor((new Date().getTime() - this.Inicio)/1000); 

                var persona = {
                    Nombre: this.nombre,
                    Tiempo: this.Fin,
                    Gano: "Gano",
                    Intentos : 2,
                    Juego: this.NombreDelJuego
                };
              
                this.Jugadores.push(persona);             
                var JugadoresGuardados = JSON.stringify(this.Jugadores);
                localStorage.setItem("JugadoresGuardados", JugadoresGuardados); 

               
            }
        else
            {
                this.Gano = false;
                this.NumeroIngresado = null;

               
            } 
    }
}
