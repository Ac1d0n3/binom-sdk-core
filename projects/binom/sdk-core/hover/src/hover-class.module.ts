import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverClassDirective } from './hover-class.directive';

@NgModule({
  declarations: [
    HoverClassDirective
  ],
  imports: [
    CommonModule
  ], exports:[
    HoverClassDirective
  ]
})
export class BnHoverClassModule { }
