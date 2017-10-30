import { Component, OnInit } from '@angular/core';
import { MemoTest} from '../../Clase/memoTest';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {


  miJuego: MemoTest;
  constructor() {
    this.miJuego = new MemoTest("pablo","Jugador1");
  }

  ngOnInit() {
  }




}
