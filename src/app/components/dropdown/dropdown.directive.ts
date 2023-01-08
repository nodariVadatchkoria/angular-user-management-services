import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{
  // isOpen = false;
  @HostListener('click')
  toggleOpen() {
    // this.isOpen = !this.isOpen;
    this.elementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('open');
  }

  // @HostListener('document:click', ['$event'])
  // backdropClick(event: any) {
  //   this.isOpen && this.elementRef.nativeElement.getElementsByClassName('dropdown__content')[0].classList.toggle('open');
  // }

  constructor(
    private elementRef: ElementRef
  ) { }


}
