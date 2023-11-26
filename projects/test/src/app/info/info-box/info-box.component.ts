import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnInfoBoxComponent } from '@binom/sdk-core/info';

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule,BnInfoBoxComponent],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent {

}
