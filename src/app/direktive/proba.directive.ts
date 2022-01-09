import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appProba]'
})
export class ProbaDirective {

  constructor(private el: ElementRef) {
  }

  @Input() appProba = '';


  @HostListener('mouseleave') onMouseLeave() {
    this.istakni('');
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.istakni(this.appProba || 'red');
  }

  private istakni(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
