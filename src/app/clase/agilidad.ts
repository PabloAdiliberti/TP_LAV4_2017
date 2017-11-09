import { Juego } from './Juego';

export class Agilidad  extends Juego
{ 
    Numero1: number;
    Operador: string;
    Numero2: number;
    Resultado: number;
    ResultadoReal: number;
    Inicio:number; 
    Fin:number; 
    Jugadores: Array<any>;
    nombre:string;
    Habilitado: boolean;

    constructor(nombre:string, jugador: string) 
     { 
        super(nombre,jugador);
        this.Habilitado = true;
        this.NombreDelJuego = "Agilidad aritmetica";   
        this.nombre = jugador;
        this.Jugadores = new Array<any>();
        
        var user = localStorage.getItem("JugadoresGuardadosAgilidad");
        var json = JSON.parse(user);

     }

     public GenerarNuevo()
     {
        this.Habilitado = false
        this.Resultado = null;
        this.Numero1 = Math.floor(Math.random()*100+1);
        this.Numero2 = Math.floor(Math.random()*100+1);
        switch(Math.floor(Math.random() * (5 - 1)) + 1) 
        {
            case 1:
            this.Operador = "+";
            break;
            case 2:
            this.Operador = "-";
            break;
            case 3:
            this.Operador = "*";
            break;
            case 4:
            this.Operador = "/";
            break;
        }  
        
        this.Inicio = new Date().getTime();  
     }

     public Verificar()
     {
       
         switch(this.Operador)
         {
            case "+": 
            this.ResultadoReal = this.Numero1 + this.Numero2;
            break;     
            case "-":
            this.ResultadoReal = this.Numero1 - this.Numero2;
            break; 
            case "*":
            this.ResultadoReal = this.Numero1 * this.Numero2;
            break; 
            case "/":
            this.ResultadoReal = this.Numero1 / this.Numero2;
            break; 
         }

         if(this.ResultadoReal == this.Resultado)
            {
                this.Gano = true;
                this.Fin = Math.floor((new Date().getTime() - this.Inicio)/1000);
                
                var persona = {
                    Nombre: this.nombre,
                    Tiempo: this.Fin,
                    Gano: "Gano",
                    Juego: this.NombreDelJuego
                };
              
                this.Jugadores.push(persona);             
                var JugadoresGuardados = JSON.stringify(this.Jugadores);
                localStorage.setItem("JugadoresGuardadosAgilidad", JugadoresGuardados); 
               
            }
         else
            this.Gano = false;
     }

}