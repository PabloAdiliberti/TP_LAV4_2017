import { Juego } from './Juego';

export class Adivina extends Juego{
    NumeroSecreto: number;
    NumeroIngresado: number;
    Inicio:number; 
    Fin:number; 
    nombre:string;
    Habilitado: boolean;
    intentos:number;
    

    Jugadores: Array<any>;
    
    constructor(nombre:string, jugador: string) 
    { 
     
        super(nombre,jugador);
        this.intentos = 0;
        this.Habilitado = true;
        this.nombre = jugador;
        this.NombreDelJuego = nombre;
        this.NumeroSecreto = null;
        this.Jugadores = new Array<any>();

        var user = localStorage.getItem("JugadoresGuardadosA");
        var json = JSON.parse(user);

            
        if(json != null)
            this.Jugadores = json;


    }

    public GenerarNuevo():void
    {
        this.intentos = 0;
        this.Habilitado = false
        this.NumeroIngresado= null;
        this.NumeroSecreto = Math.floor(Math.random()*100+1);
        console.info("Numero: ", this.NumeroSecreto);
        this.Inicio = new Date().getTime();   
        this.Gano = false;           
    }

    public Verificar()
    {
        this.intentos++;
        if(this.NumeroIngresado==this.NumeroSecreto)
            {
                alert("Gano");
                this.NumeroIngresado= null;
                this.Gano= true;   
                this.Fin = (new Date().getTime() - this.Inicio)/1000; 

                var persona = {
                    Nombre: this.nombre,
                    Tiempo: this.Fin,
                    Gano: "Gano",
                    Intentos : this.intentos,
                    Juego: this.NombreDelJuego
                };
              
                this.Jugadores.push(persona);             
                var JugadoresGuardados = JSON.stringify(this.Jugadores);
                localStorage.setItem("JugadoresGuardadosA", JugadoresGuardados); 

               
            }
        else
            {
                alert("Intente denuevo");
                this.Gano = false;
                this.NumeroIngresado = null;               
            } 
    }
}
