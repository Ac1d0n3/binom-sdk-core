import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnProgressContentComponent } from '@binom/sdk-core/progress-content';

@Component({
  selector: 'app-content-progress',
  standalone: true,
  imports: [CommonModule, BnProgressContentComponent],
  templateUrl: './content-progress.component.html',
  styleUrl: './content-progress.component.scss'
})
export class ContentProgressComponent {

}
