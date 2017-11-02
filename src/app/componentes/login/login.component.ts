import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Login } from '../../Clase/login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuthModule,AngularFireAuth, } from 'angularfire2/auth';
import { StoreService } from '../../servicios/store.service';
import { LocalStorageService } from 'angular-2-local-storage';

import {firebase}  from 'firebase/database';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  miUsuario : Login;
  users: FirebaseListObservable<any[]>;
  tipoUser:string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private localStorageService: LocalStorageService,
              db: AngularFireDatabase,
              private _auth:AngularFireAuth)
  {
    this.miUsuario = new Login(route,router,_auth);
    
    console.info(this.users);
  }


  Registrarse(){

    this.router.navigate(['/Registrar']);
  }

    UserValido()
    {
      switch(this.tipoUser){
        case "admin":{
          this.miUsuario.usuario="admin@admin.com";
          this.miUsuario.clave="111111";
          break;}
        case "usuario":{
          this.miUsuario.usuario="usuario@usuario.com";
          this.miUsuario.clave="333333";
          break;}
        case "invitado":{
          this.miUsuario.usuario="invitado@invitado.com";
          this.miUsuario.clave="222222";
          break;}                
        case "jugador1":{
          this.miUsuario.usuario="j1@jugador.com";
          this.miUsuario.clave="444444";
          break;}
        case "jugador2":{
          this.miUsuario.usuario="j2@jugador.com";
          this.miUsuario.clave="555555";
          break;}        
      }
    }

  ngOnInit() {
  }


  

}
