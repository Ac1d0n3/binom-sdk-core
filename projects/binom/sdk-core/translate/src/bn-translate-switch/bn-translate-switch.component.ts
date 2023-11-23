import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { TranslateService,LangChangeEvent } from '@ngx-translate/core';
import { Subscription } from "rxjs";
import { coerceBooleanProperty,BooleanInput } from '@angular/cdk/coercion';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio'
import { FormsModule } from '@angular/forms';
import { MatButtonModule }from '@angular/material/button';
@Component({
  selector: 'bn-translate-switch',
  templateUrl: './bn-translate-switch.component.html',
  imports: [CommonModule, MatRadioModule, FormsModule, MatButtonModule],
  standalone: true
})
export class BnTranslateSwitchComponent implements OnInit, OnDestroy {
  private subscriptions: Array<Subscription> = new Array<Subscription>();
  constructor(private translate: TranslateService) { }
  curLangs:any;
  curLang: string = 'en-US';
  @Input() saveToLocalStorage: boolean = true;
  @Input() disabled: boolean = false;
  private  _enableToolTips:boolean = false;
  get enableToolTips(): boolean{ return this._enableToolTips; }
  @Input() set enableToolTips(val: BooleanInput) { this._enableToolTips = coerceBooleanProperty(val); }
  ngOnInit(): void {
   
    
    this.curLangs = this.translate.getLangs();
    this.langName = this.curLang;


    if(this.saveToLocalStorage){
      let lan = localStorage.getItem('language');
      if( lan !== null){
        this.translate.use(lan);
        this.curLang = lan;
      } 
    } else  this.curLang = this.translate.currentLang || 'en-US';
    this.subscriptions.push(this.translate.onLangChange.subscribe((event: LangChangeEvent) => this.langName = event.lang));
  }

  langName!: string;
  setLanguage(): void {
      this.translate.use(this.langName);
      this.curLang = this.langName;
      if(this.saveToLocalStorage)
        localStorage.setItem('language', this.langName);
  }

  ngOnDestroy(){ this.subscriptions.forEach(subscription => subscription.unsubscribe());}

}