import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective implements OnInit {
  @Input() defaultColor:string='transparent';
  @Input('appHightlight') highlightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string;
 

  constructor(private elRef:ElementRef, private renderer:Renderer2) {}

   ngOnInit(): void {
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    this.backgroundColor=this.highlightColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','#ccc');
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  }

}
