import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'bn-form-error',
  standalone: true,
  imports: [CommonModule, MatInputModule,TranslateModule ],
  templateUrl: './bn-form-error.component.html',
  styleUrl: './bn-form-error.component.css'
})
export class BnFormErrorComponent {

  @Input() type: any;
  @Input() message: any;
  @Input() min: number = 3;
  @Input() max: number = 255;
  @Input() inputLength: number = 255;

  constructor() { }
}
