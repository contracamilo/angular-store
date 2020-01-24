import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHiglight]'
})
export class HiglightDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundcolor = 'red';
  }
}
