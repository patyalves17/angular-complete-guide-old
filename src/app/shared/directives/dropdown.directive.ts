import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean=false;

  constructor() { }

  @HostListener('click') mouseClick(eventData:Event){
    this.isOpen=!this.isOpen;
  }
  // @HostListener('mouseleave') mouseLeave(eventData:Event){
  //   this.isOpen=false;
  // }

}
