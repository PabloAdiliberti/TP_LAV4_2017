import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-barra',
  templateUrl: './menu-barra.component.html',
  styleUrls: ['./menu-barra.component.css']
})
export class MenuBarraComponent implements OnInit {

  muestra:boolean;
  constructor() 
  {
    this.muestra = true;
   }

  ngOnInit() {
  }

  mortrar(){
    //alert("A");
    if(this.muestra)
      this.muestra = false;
    else
      this.muestra = true;
    //alert(this.muestra);
  }

}
