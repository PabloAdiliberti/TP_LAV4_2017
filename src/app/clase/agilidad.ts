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

    constructor()
     { 
        super("pablo","jugador1");
        this.NombreDelJuego = "Agilidad aritmetica";   
     }

     public GenerarNuevo()
     {
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
            }
         else
            this.Gano = false;
     }

}