import { Directive ,Renderer2,ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appResaltar2]'
})
export class Resaltar2Directive {

  ngOnInit():void
  {
    this.renderisador.setStyle(this.obj.nativeElement, "backgroundColor", "Yellow");
    this.renderisador.setProperty(this.obj.nativeElement,"textContent","rojo");
  }

  constructor(private obj: ElementRef,
               private renderisador:Renderer2) 
  {

  }


}
