import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen:boolean=false;

  constructor() { }

  @HostListener('click') mouseClick(eventData:Event){
    console.log("mouseClick");
    this.isOpen=!this.isOpen;
  }

}
