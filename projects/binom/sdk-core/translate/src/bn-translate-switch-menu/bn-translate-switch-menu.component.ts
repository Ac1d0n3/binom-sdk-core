import { Component, Input, OnInit, OnDestroy} from '@angular/core';
import { TranslateService,LangChangeEvent, TranslateModule } from '@ngx-translate/core';
import { Subscription } from "rxjs";

import { coerceBooleanProperty,BooleanInput } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'
import { BnTranslateSwitchComponent } from '../bn-translate-switch/bn-translate-switch.component';

import {MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'bn-translate-switch-menu',
  templateUrl: './bn-translate-switch-menu.component.html',
  standalone:true,
  imports: [CommonModule, MatMenuModule, FormsModule, BnTranslateSwitchComponent,MatTooltipModule, TranslateModule],
})
export class BnTranslateSwitchMenuComponent implements OnInit,OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  constructor(private translate: TranslateService) { }
  currentLanguages:any;
  currentLanguage: string = 'en-US';
  @Input() saveToLocalStorage: boolean = true;

  @Input() disabled: boolean = false;

  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

  ngOnInit(){
    this.currentLanguage = this.translate.currentLang;
    let sub1 = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.currentLanguage = event.lang;
    });
    this.subscriptions.push(sub1)
  }

  ngOnDestroy(){ this.subscriptions.forEach(subscription => subscription.unsubscribe());}
}
