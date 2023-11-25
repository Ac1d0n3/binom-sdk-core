import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BnHelpInfo } from './bn-help.model';
@Injectable({
  providedIn: 'root'
})
export class BnHelpService {

  constructor() {
    this.getSettingsFromLocal();
    this.helpInfo$.next(this.helpInfo)
  }

  private helpInfo:BnHelpInfo = {
    tooltips: false,
    toolTipsCols: false,
    tooltipsDescr: false,
    saveSettings: false
  }
  public helpInfo$: BehaviorSubject<BnHelpInfo> = new BehaviorSubject( this.helpInfo );

  setValues(values:any){
    this.helpInfo = values;
    this.helpInfo$.next(this.helpInfo)
  }

  public getSettingsFromLocal() {
    let getSettings = localStorage.getItem('bnHelpSettings');
    if(getSettings){
        this.helpInfo = JSON.parse(getSettings);
        this.helpInfo$.next(this.helpInfo)
    }
  }

  public setSettingsToLocal() {
    if(this.helpInfo.saveSettings){
      localStorage.setItem('bnHelpSettings', JSON.stringify(this.helpInfo));
    } else {
      localStorage.removeItem('bnHelpSettings');
    }
  }

}
