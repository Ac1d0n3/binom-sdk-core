
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { BnHelpService } from '../bn-help.service';
import { Subscription } from "rxjs";
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'bn-help-switch',
  templateUrl: './bn-help-switch.component.html',
  standalone: true,
  imports: [CommonModule, MatSlideToggleModule, FormsModule, TranslateModule, ReactiveFormsModule, MatButtonModule, MatCheckboxModule ]
})
export class BnHelpSwitchComponent implements OnInit, OnDestroy {

    private subscriptions: Array<Subscription> = new Array<Subscription>();
    constructor(
      private helpSvc:BnHelpService
    ){}

    isInit:boolean = false;
    helpInfo!:any;



    ngOnInit():void{
      
      let sub1 = this.helpSvc.helpInfo$.subscribe((data:any)=>{
        this.helpInfo = data;
   
        if(this.helpInfo) this.isInit = true;
        
      });
      this.subscriptions.push(sub1);
    }

    changeHelp(){ 
      
      this.helpSvc.setValues(this.helpInfo);
      this.helpSvc.setSettingsToLocal();
    
    }
  
  
    ngOnDestroy(){ this.subscriptions.forEach(subscription => subscription.unsubscribe());}

}
