import { Component, OnInit } from '@angular/core';
import { MemoTest} from '../../Clase/memoTest';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {


  miJuego: MemoTest;
  constructor(private router: Router) {
    this.miJuego = new MemoTest("pablo","Jugador1");
  }

  ngOnInit() {
  }


  Salir()
  {
    this.router.navigate(['/menu']);
  }

}
