import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appExergue]'
})
export class ExergueDirective {
  private default = "lightgreen";
  @HostBinding('style.backgroundColor') bg:string= this.default;
  constructor() { }
  @HostListener('mouseenter') mouseenter() {
    this.bg = "lightblue"
  }
  @HostListener('mouseleave') mouseleave() {
    this.bg = this.default
  }

}
