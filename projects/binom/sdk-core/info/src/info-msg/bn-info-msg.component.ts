import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'bn-info-msg',
  standalone: true,
  imports: [CommonModule, MatTooltipModule,TranslateModule],
  templateUrl: './bn-info-msg.component.html',
  styleUrl: './bn-info-msg.component.css'
})
export class BnInfoMsgComponent {
  @Input() infos:any[] = [];
  @Input() enableToolTips:boolean = false;
  @Input() translateTag:string = '';

}
