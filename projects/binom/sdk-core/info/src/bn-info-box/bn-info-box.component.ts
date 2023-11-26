
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { TranslateModule } from '@ngx-translate/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bn-info-box',
  standalone: true,
  imports: [CommonModule, MatCardModule, TranslateModule ],
  templateUrl: './bn-info-box.component.html',
  styleUrl: './bn-info-box.component.css'
})
export class BnInfoBoxComponent {
  @Input() icon: string = 'fa-exclamation';
  @Input() translateKey: string = 'bnInfo.notFound';
  @Input() translateKeySub: string = '';
  @Input() cardClass: string = 'info-card-small';

  private  _warn:boolean = false;
  get warn(): boolean{ return this._warn; }
  @Input() set warn(val: BooleanInput) { this._warn = coerceBooleanProperty(val); }
  
  private  _showButtonA:boolean = false;
  get showButtonA(): boolean{ return this._showButtonA; }
  @Input() set showButtonA(val: BooleanInput) { this._showButtonA = coerceBooleanProperty(val); }

  private  _showButtonB:boolean = false;
  get showButtonB(): boolean{ return this._showButtonB; }
  @Input() set showButtonB(val: BooleanInput) { this._showButtonB = coerceBooleanProperty(val); }

  @Input() buttonTranslateKeyA:string = '';

  @Input() buttonTranslateKeyB:string = '';
  @Output() buttonAClicked = new EventEmitter<void>();
  @Output() buttonBClicked = new EventEmitter<void>();

  onButtonAClick() {
    this.buttonAClicked.emit();
  }
  onButtonBClick() {
    this.buttonBClicked.emit();
  }
}
