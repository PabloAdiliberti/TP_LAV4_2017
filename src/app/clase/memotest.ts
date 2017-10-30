import { Juego } from './Juego';

export class MemoTest extends Juego{
    NombreDelJuego : string;
    myPhotoURL: any;
    respuesta: string;
    foto:string;
    ayuda:Array<any>;
    respuestaArray: Array<any>;
    largo:any;

    constructor(nombre:string, jugador: string) 
    {    
        super(nombre,jugador);
       
        this.NombreDelJuego = "Pais"

        this.myPhotoURL = "../assets/españa.png";
        this.respuesta= "españa";

        this.respuestaArray=  this.respuesta.split('');
        this.ayuda = new Array<any>(this.respuesta.length);
        for (var index = 0; index < this.respuesta.length; index++) {
            this.ayuda[index]= "_";
        }
        this.foto= "";
        this.largo=0;   
     
    }

    public Verificar()
    {
        if(this.respuesta == this.foto)
        {
            alert("gano"); 
            this.foto = "";
            this.Siguiente();
        }
        else
        {
            alert("perdio");
            this.foto = "";
        }
    }

    Ayuda()
    {
         this.largo = Math.floor(Math.random()*this.respuesta.length);
        if( this.ayuda[this.largo] != this.respuestaArray[this.largo])
            this.ayuda[this.largo]= this.respuestaArray[this.largo];        
        else     
            this.Ayuda();   
    }

    Siguiente()
    {  
       // this.ayuda = null;
        this.ayuda = new Array<any>(this.respuesta.length);
        for (var index = 0; index < this.respuesta.length; index++) {
            this.ayuda[index]= "_"
        }
        switch (this.myPhotoURL) {
            case "../assets/españa.png":
            this.myPhotoURL = "../assets/brasil.png";
            this.respuesta= "brasil";
            this.respuestaArray=  this.respuesta.split('');
            this.ayuda = new Array<any>(this.respuesta.length);
            for (var index = 0; index < this.respuesta.length; index++) {
                this.ayuda[index]= "_"
            }
            break;
            case "../assets/brasil.png":
            this.myPhotoURL = "../assets/argentina.png";
            this.respuesta= "argentina";
            this.respuestaArray=  this.respuesta.split('');
            this.ayuda = new Array<any>(this.respuesta.length);
            for (var index = 0; index < this.respuesta.length; index++) {
                this.ayuda[index]= "_"
            }
                
            break;
            case "../assets/argentina.png":
            this.myPhotoURL = "../assets/francia.png";
            this.respuesta= "francia";
            this.respuestaArray=  this.respuesta.split('');
            this.ayuda = new Array<any>(this.respuesta.length);
            for (var index = 0; index < this.respuesta.length; index++) {
                this.ayuda[index]= "_"
            }
            break;
                
        
            default:
                break;
        }
    }

    Nuevo()
    {
        this.myPhotoURL = "../assets/españa.png";
        this.respuesta= "españa";

        this.respuestaArray=  this.respuesta.split('');
        this.ayuda = new Array<any>(this.respuesta.length);
        for (var index = 0; index < this.respuesta.length; index++) {
            this.ayuda[index]= "_";
        }
        this.foto= "";
    }

}