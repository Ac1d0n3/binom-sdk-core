import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnInfoBoxComponent, BnInfoMsgComponent } from '@binom/sdk-core/info';

@Component({
  selector: 'app-info-msg',
  standalone: true,
  imports: [CommonModule, BnInfoMsgComponent],
  templateUrl: './info-msg.component.html',
  styleUrl: './info-msg.component.scss'
})
export class InfoMsgComponent {
  infoData:any = [];

 
  constructor(){
    this.infoData.push({
      name:'First', end: 'World', start: 'Hello',
      icon: 'fa-fw fas fa-user', middle: 'first'
    });

    this.infoData.push({
      name:'Second', end: 'World', start: 'Hello',
      icon: 'fa-fw fas fa-times', middle: 'second'
    });
  }
}
