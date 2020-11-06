import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceComponent } from './exercice.component';
import {BorderDirective} from "../../directives/border/border.directive";



@NgModule({
  declarations: [ExerciceComponent,
  BorderDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ExerciceComponent
  ]
})
export class ExerciceModule { }
