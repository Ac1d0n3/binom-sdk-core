import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnTranslateSwitchComponent, BnTranslateSwitchMenuComponent } from '@binom/sdk-core/translate';

@Component({
  selector: 'app-translate-switch',
  standalone: true,
  imports: [CommonModule, BnTranslateSwitchComponent, BnTranslateSwitchMenuComponent],
  templateUrl: './translate-switch.component.html',
  styleUrl: './translate-switch.component.scss'
})
export class TranslateSwitchComponent {

}
