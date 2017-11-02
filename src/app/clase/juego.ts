export class Juego {
    Nombre : string;
    Gano: boolean;
    Jugador: string;
    NumeroIngresado: number;
    Inicio:number; 
    Fin:number; 
    NombreDelJuego : string;
    
    constructor(nombre:string, jugador: string) 
    { 
    this.NombreDelJuego = nombre;
    this.Jugador = jugador;

    }


}
