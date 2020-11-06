import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MouseExModule} from "./components/mouse-ex/mouse-ex.module";
import {ExerciceModule} from "./components/exercice/exercice.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MouseExModule,
    ExerciceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
