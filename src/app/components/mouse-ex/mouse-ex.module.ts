import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MouseExComponent} from "./mouse-ex.component";
import {ExergueDirective} from "../../directives/hover/exergue.directive";



@NgModule({
  declarations: [
    MouseExComponent,
    ExergueDirective
  ],
  exports: [
    MouseExComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MouseExModule { }
