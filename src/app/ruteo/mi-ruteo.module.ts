import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../componentes/login/login.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { ListadoComponent } from'../componentes/listado/listado.component';
import { RegistrarComponent } from '../componentes/registrar/registrar.component';

const MiRuteo = [
  {path: '' , component: LoginComponent},
  {path: 'Login' , component: LoginComponent},
  {path: 'Registrar' , component: RegistrarComponent}];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MiRuteoModule { }
