import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from "rxjs";
import { coerceBooleanProperty,BooleanInput } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'bn-translate-switch',
  templateUrl: './bn-translate-switch.component.html',
  imports: [CommonModule, MatRadioModule, FormsModule],
  standalone: true
})
export class BnTranslateSwitchComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  constructor(private translate: TranslateService) { }
  currentLanguages:any;

  currentLanguage: string = 'en-US';
  @Input() saveToLocalStorage: boolean = true;
  @Input() disabled: boolean = false;

  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang;
    this.currentLanguages = this.translate.getLangs();
    this.languageName = this.currentLanguage;
    if(this.saveToLocalStorage){
      let lan = localStorage.getItem('language');
      if( lan !== null){
        this.translate.use(lan);
        this.currentLanguage = lan;
      } else {
        this.currentLanguage = this.translate.currentLang;
      }
    }

    let sub1 = this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.languageName = event.lang;
    });
    this.subscriptions.push(sub1)
  }

  languageName!: string;
  setLanguage(): void {
      this.translate.use(this.languageName);
      this.currentLanguage = this.languageName;
      if(this.saveToLocalStorage)
        localStorage.setItem('language', this.languageName);
  }

  ngOnDestroy(){ this.subscriptions.forEach(subscription => subscription.unsubscribe());}

}