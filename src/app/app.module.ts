import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AdivinaComponent } from './componentes/adivina/adivina.component';
import { FormsModule } from '@angular/forms';
import { AgilidadComponent } from './componentes/agilidad/agilidad.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LoginComponent } from './componentes/login/login.component';
import { RouterModule, Router} from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { MenuDeListadoComponent } from './componentes/menu-de-listado/menu-de-listado.component';

import { ListadoService} from './servicios/listado.service';
import { EstadisticaAdivinaComponent } from './componentes/estadistica-adivina/estadistica-adivina.component';
import { EstadisticaAgilidadComponent } from './componentes/estadistica-agilidad/estadistica-agilidad.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { StoreService } from './servicios/store.service';
import { LocalStorageModule } from 'angular-2-local-storage';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { MenuOpcionesComponent } from './componentes/menu-opciones/menu-opciones.component';
import { MenuBarraComponent } from './componentes/menu-barra/menu-barra.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { ResaltarDirective } from './directivas/resaltar.directive';
import { EjemploDirectivasComponent } from './componentes/ejemplo-directivas/ejemplo-directivas.component';
import { Resaltar2Directive } from './directivas/resaltar2.directive';
import { Resaltar3Directive } from './directivas/resaltar3.directive';
import { Resaltar4Directive } from './directivas/resaltar4.directive';


let miRuteo = [{path:'adivina',component:AdivinaComponent},
{path:'login',component:LoginComponent},
{path:'',component:LoginComponent},
{path:'agilidad',component:AgilidadComponent},
{path:'menu',component:MenuComponent},
{path:'listado',component: ListadoComponent},
{path: 'Registrar' , component: RegistrarComponent},
{path:'estadisticaAdivina',component: EstadisticaAdivinaComponent},
{path:'estadisticaAgilidad',component: EstadisticaAgilidadComponent},
{path:'memotest',component: MemotestComponent},
{path:'anagrama',component: AnagramaComponent},
{path:'PPT',component: PiedraPapelTijeraComponent},
{path:'quienSoy',component: QuienSoyComponent},
{path:'directiva',component: EjemploDirectivasComponent},
{path:'menuDeListado',component: MenuDeListadoComponent}] 

export const firebaseConfig = {
  apiKey: "AIzaSyDxMQdYSpRKuZgh7L_mOohzuSqN6utZb0k",
  authDomain: "appsaladejuegos.firebaseapp.com",
  databaseURL: "https://appsaladejuegos.firebaseio.com",
  projectId: "appsaladejuegos",
  storageBucket: "",
  messagingSenderId: "464290374032"
};

@NgModule({
  declarations: [
    AppComponent,
    AdivinaComponent,
    AgilidadComponent,
    MenuComponent,
    LoginComponent,
    ListadoComponent,
    MenuDeListadoComponent,
    EstadisticaAdivinaComponent,
    EstadisticaAgilidadComponent,
    RegistrarComponent,
    MemotestComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    MenuOpcionesComponent,
    MenuBarraComponent,
    QuienSoyComponent,
    ResaltarDirective,
    EjemploDirectivasComponent,
    Resaltar2Directive,
    Resaltar3Directive,
    Resaltar4Directive
  ],
  imports: [
    RouterModule.forRoot(miRuteo),
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
        })
  ],
  providers: [
    StoreService,
    ListadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
