import { Juego } from './Juego';

export class PPT extends Juego{

    elijioUsuario:string;
    elijioMaquina:string;
    maquina:string;
    puntosU:number;
    puntosM:number;
    empate:number;

    constructor(nombre:string, jugador: string) 
    {    
        super(nombre,jugador);
       
        this.NombreDelJuego = "Pais"  
        this.puntosU = 0;  
        this.puntosM = 0;  
        this.empate = 0;
    }


    OpcionElegida(opcion:string)
    {
        switch (opcion) {
            case "piedra":
            this.elijioUsuario= "../assets/piedra.jpg";
            this.ElijeMaquina(); 
            this.QuienGano(opcion);
                break;
            case "papel":
            this.elijioUsuario =  "../assets/papel.jpg"; 
            this.ElijeMaquina(); 
            this.QuienGano(opcion);  
                break;
            case "tijera":
            this.elijioUsuario =  "../assets/tijera.jpg";  
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
            this.elijioMaquina =  "../assets/piedra.jpg";
            this.maquina = "piedra";
                break;
            case 2:
            this.elijioMaquina =  "../assets/papel.jpg";
            this.maquina = "papel";
                break;
            case 3:
            this.elijioMaquina =  "../assets/tijera.jpg";
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
                        {

                            this.puntosM++;
                           // alert(this.puntosM);
                        }
                    if(this.maquina == "tijera")
                    {
                        this.puntosU++;
                        //alert(this.puntosU);
                    }
                
                break;
            case "papel":
                    if(this.maquina == "piedra")
                    {                     
                        this.puntosU++;
                    }
                    if(this.maquina == "papel")
                        this.empate++;
                    if(this.maquina == "tijera")
                    {
                        this.puntosM++;
                        
                    }
                
                break;
            case "tijera":
                    if(this.maquina == "piedra")
                    {
                        this.puntosM++;
                    }
                    if(this.maquina == "papel")
                    {
                        this.puntosU++;
                    }
                    if(this.maquina == "tijera")
                        this.empate++;
                
                break;
        
            default:
                break;
        }
    }

}