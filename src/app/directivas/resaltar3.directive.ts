import { Directive ,Renderer2,ElementRef, OnInit, Input} from '@angular/core';

@Directive({
  selector: '[appResaltar3]'
})
export class Resaltar3Directive {

  @Input() appResaltar3: string;

  constructor(private obj: ElementRef,
    private renderisador:Renderer2) 
{

}

ngOnInit():void
{
  this.renderisador.setStyle(this.obj.nativeElement, "backgroundColor", this.appResaltar3);
  this.renderisador.setProperty(this.obj.nativeElement,"textContent","Independiente");
}


}
