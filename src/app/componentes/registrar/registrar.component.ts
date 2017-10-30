import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import { Login } from '../../Clase/login';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  Mensaje:string="";
  miUsuario : Login;
  users: FirebaseListObservable<any[]>;
  constructor( private route: ActivatedRoute,
    private router: Router,
    private _auth:AngularFireAuth){

      this.miUsuario = new Login(route,router,_auth);
}

  Registrar(){
      try
        {
        const result = this._auth.auth.createUserWithEmailAndPassword(this.miUsuario.usuario,this.miUsuario.clave);
         this.Mensaje = this.miUsuario.usuario + " Fue ingresado Exitosamente!"
        // this.ingreso = true;
        }
        catch(e)
        {
        // this.ingreso = false;
        // console.error(e);
        // this.Mensaje=e;
        }
  }

  Cancelar(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
