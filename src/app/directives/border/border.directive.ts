import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {
  private bgs = ["grey","pink","red","green","yellow","purple","blue","black"];
  private colors = ["grey","pink","red","green","yellow","purple","blue","black"];
  @HostBinding('style.border') bg:string= 'red';
  @HostBinding('style.color') color:string= 'grey';

  constructor() { }

  @HostListener('keydown') keydown() {
    this.bg = `4px solid ${this.bgs[Math.floor(Math.random()*8)-1]}`;
    this.color = this.colors[Math.floor(Math.random()*8)-1];
  }
}
