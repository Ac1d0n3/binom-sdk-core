
import { CommonModule } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'bn-suffix-info',
  standalone: true,
  imports: [CommonModule, MatMenuModule, TranslateModule, MatButtonModule],
  templateUrl: './bn-suffix-info.component.html',
  styleUrl: './bn-suffix-info.component.css'
})
export class BnSuffixInfoComponent {
  @HostBinding('class.toolbar-component-group') addClass: boolean = true;
  @Input() icon:string = '';
  @Input() iconType:string = '';
  @Input() iconArt:string = '';
  @Input() iconSetClass:string = '';
  @Input() color:any = '';
  @Input() xPosition:any = 'before';
  @Input() infoData:any = [];

  constructor(private translate: TranslateService) { }

}
