import { Component, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BnHelpSwitchComponent } from '../bn-help-switch/bn-help-switch.component';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'bn-help-switch-menu',
  templateUrl: './bn-help-switch-menu.component.html',
  standalone:true,
  imports: [CommonModule, MatMenuModule, FormsModule, TranslateModule, BnHelpSwitchComponent, MatTooltipModule]
})
export class BnHelpSwitchMenuComponent {
  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }
}
