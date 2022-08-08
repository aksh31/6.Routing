import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {

  constructor(private eleRef : ElementRef) { }

  @HostBinding('class.show') showClass : boolean = false;
  @HostListener('click', ['$event']) onClick(eve : Event){
    // eve.preventDefault();
    this.showClass = !this.showClass;
    this.eleRef.nativeElement.classList.toggle('show');
    let divClass = this.eleRef.nativeElement.lastElementChild
    divClass.classList.toggle('show');
  }

}
