import { Juego } from './Juego';

export class Adivina extends Juego{
    NombreDelJuego : string;
    NumeroSecreto: number;
    NumeroIngresado: number;
    Inicio:number; 
    Fin:number; 
    constructor(nombre:string, jugador: string) 
    { 
        super(nombre,jugador);
        this.NumeroSecreto = null;
        this.NombreDelJuego = "Adivina el numero"
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
            }
        else
            {
                this.Gano = false;
                this.NumeroIngresado = null;
            } 
    }
}
