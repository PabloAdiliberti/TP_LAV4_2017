import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import { StoreService } from '.././servicios/store.service';

export class Login {

    usuario: string;
    clave: string;
    clave2:string;
    tipoUser: string = 'null';
    Mensaje:string="";
    ingreso:boolean=false;

    constructor( private route: ActivatedRoute,
                 private router: Router,
                 private _auth:AngularFireAuth){
    }

    async Entrar()
    {
    var result = await this._auth.auth.signInWithEmailAndPassword(this.usuario,this.clave)
                          .catch(function(error) {         
                              alert(error.message);
                              //console.log(error);
                              
                          });
  

                          var persona = {
                            nombre: this.usuario
                          };
                          var personaAGuardar = JSON.stringify(persona);
                          localStorage.setItem("miUsuario", personaAGuardar); 
                      
                        if(result!=undefined){
                          this.router.navigate(['/menu']);
                          
                        }
  
    }

    async registrar()
    {
        try
        {
        const result = await this._auth.auth.createUserWithEmailAndPassword(this.usuario,this.clave);
        this.Mensaje=this.usuario + " Fue ingresado Exitosamente!"
        this.ingreso = true;
        }
        catch(e)
        {
        this.ingreso = false;
        console.error(e);
        this.Mensaje=e;
        }
        
        this.router.navigate(['/Registrar']);
    }
}
