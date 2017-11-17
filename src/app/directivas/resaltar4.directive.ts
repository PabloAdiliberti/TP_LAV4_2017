import { Directive ,Renderer2,ElementRef, OnInit, Input ,OnDestroy} from '@angular/core';

@Directive({
  selector: '[appResaltar4]'
})
export class Resaltar4Directive {

  @Input() appResaltar4: string;
  funcionOver : Function;
  funcionOut :  Function;

  constructor(private obj: ElementRef,
    private renderisador:Renderer2) 
    {

    }

    ngOnInit():void
    {
        this.funcionOver = this.renderisador
        .listen(this.obj.nativeElement
          ,'mouseover',e => (this.renderisador.setStyle(this.obj.nativeElement, "backgroundColor", 'blue')));

          this.funcionOut = this.renderisador
          .listen(this.obj.nativeElement
            ,'mouseout',e => (this.renderisador.setStyle(this.obj.nativeElement, "backgroundColor", 'red')));
    }

    OnDestroy():void
    {
      this.funcionOut();
      this.funcionOver();
    }

}
