import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnSuffixInfoComponent } from '@binom/sdk-core/info';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-suffix-info',
  standalone: true,
  imports: [CommonModule, BnSuffixInfoComponent, MatButtonModule, MatInputModule,MatFormFieldModule],
  templateUrl: './suffix-info.component.html',
  styleUrl: './suffix-info.component.scss'
})
export class SuffixInfoComponent {
  infoData:any = [];

 
  constructor(){
    this.infoData.push({
      name:'Help', end: 'End', start: 'start',
      prefixIconClass: 'warn-color fa-fw fas fa-times', middle: 'msg-middle'
    });

    this.infoData.push({
      name:'Help2', end: 'End', start: 'start',
      prefixIconClass: 'warn-color fa-fw fas fa-times', middle: 'msg-middle'
    });
  }
}
