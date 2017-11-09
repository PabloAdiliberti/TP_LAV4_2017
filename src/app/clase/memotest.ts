import { Juego } from './Juego';

export class MemoTest extends Juego{
    NombreDelJuego : string;
    myPhotoURL: any;
    respuesta: string;
    foto:string;
    ayuda:Array<any>;
    respuestaArray: Array<any>;
    largo:any;
    Jugadores: Array<any>;
    nombre:string;
    Inicio:number; 
    Fin:number; 
    Habilitado: boolean;

    constructor(nombre:string, jugador: string) 
    {    
        super(nombre,jugador);

        this.Habilitado = true;

        this.nombre = jugador;
        this.Jugadores = new Array<any>();
        
        var user = localStorage.getItem("JugadoresGuardadosTra");
       
        var json = JSON.parse(user);
        if(json != null)
            this.Jugadores = json;
       
        this.NombreDelJuego = "Traductor"
        this.myPhotoURL = "./assets/perro.jpg";
        this.respuesta= "DOG";
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
        var respuestaUsuario=this.foto.toUpperCase();
        if(this.respuesta == respuestaUsuario)
        {
            if(respuestaUsuario == "APPLE")
                {
                    this.Fin = Math.floor((new Date().getTime() - this.Inicio)/1000); 
                    alert("gano en :"+this.Fin + "Segundos" ); 
                  
                    var persona = {
                        Nombre: this.nombre,
                        Tiempo: this.Fin,
                        Gano: "Gano",
                        Juego: this.NombreDelJuego
                    };
                  
                    this.Jugadores.push(persona);             
                    var JugadoresGuardados = JSON.stringify(this.Jugadores);
                    localStorage.setItem("JugadoresGuardadosTra", JugadoresGuardados);
                }


                
            this.foto = "";
            this.Siguiente();
        }
        else
        {
            alert("No es la respuesta, intenta denuevo.");
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
        this.ayuda = new Array<any>(this.respuesta.length);
        for (var index = 0; index < this.respuesta.length; index++) {
            this.ayuda[index]= "_"
        }
        switch (this.myPhotoURL) {
            case "./assets/perro.jpg":
            this.myPhotoURL = "./assets/casa.jpg";
            this.respuesta= "HOUSE";
            this.respuestaArray=  this.respuesta.split('');
            this.ayuda = new Array<any>(this.respuesta.length);
            for (var index = 0; index < this.respuesta.length; index++) {
                this.ayuda[index]= "_"
            }
            break;
            case "./assets/casa.jpg":
            this.myPhotoURL = "./assets/estrella.jpg";
            this.respuesta= "STAR";
            this.respuestaArray=  this.respuesta.split('');
            this.ayuda = new Array<any>(this.respuesta.length);
            for (var index = 0; index < this.respuesta.length; index++) {
                this.ayuda[index]= "_"
            }
                
            break;
            case "./assets/estrella.jpg":
            this.myPhotoURL = "./assets/manzana.jpg";
            this.respuesta= "APPLE";
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
        alert("Inicio del juego");
        this.Inicio = new Date().getTime();   
        this.Habilitado = false;
        this.myPhotoURL = "./assets/perro.jpg";
        this.respuesta= "DOG";

        this.respuestaArray=  this.respuesta.split('');
        this.ayuda = new Array<any>(this.respuesta.length);
        for (var index = 0; index < this.respuesta.length; index++) {
            this.ayuda[index]= "_";
        }
        this.foto= "";
    }

}