import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
@Component({
  selector: 'bn-progress-content',
  standalone: true,
  imports: [CommonModule,MatProgressSpinnerModule,TranslateModule],
  templateUrl: './bn-progress-content.component.html',
  styleUrl: './bn-progress-content.component.css'
})
export class BnProgressContentComponent {
  @Input() message:string = "dataLoading"
  @Input() color:string = ""

  constructor(private translate: TranslateService) { }


}
