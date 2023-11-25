import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnHelpService, BnHelpSwitchComponent, BnHelpSwitchMenuComponent } from '@binom/sdk-core/help';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bn-help-demo',
  standalone: true,
  imports: [CommonModule, BnHelpSwitchComponent, BnHelpSwitchMenuComponent, TranslateModule],
  templateUrl: './bn-help-demo.component.html',
  styleUrl: './bn-help-demo.component.scss'
})
export class BnHelpDemoComponent {
  constructor(private helpSvc:BnHelpService){}

}
