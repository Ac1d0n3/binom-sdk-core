import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnIconComponent } from '@binom/sdk-core/icons';

@Component({
  selector: 'app-bn-icon',
  standalone: true,
  imports: [CommonModule,BnIconComponent],
  templateUrl: './bn-icon.component.html',
  styleUrl: './bn-icon.component.scss'
})
export class IconComponent {

}
