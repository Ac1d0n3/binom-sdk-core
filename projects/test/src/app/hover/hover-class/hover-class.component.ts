import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnHoverClassDirective } from '@binom/sdk-core/hover';

@Component({
  selector: 'app-hover-class',
  standalone: true,
  imports: [CommonModule, BnHoverClassDirective],
  templateUrl: './hover-class.component.html',
  styleUrl: './hover-class.component.scss'
})
export class HoverClassComponent {

}
