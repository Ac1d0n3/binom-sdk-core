import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component,HostBinding, Input } from '@angular/core';

@Component({
  selector: 'bn-icon',
  templateUrl: './bn-icon.component.html'
})
export class BnIconComponent {

  @HostBinding('class.bn-mat-icon-fix') fixClass: boolean = false;
  
  @Input() type:string = 'mat';
  @Input() art:string = 'outlined';
  @Input() icon:string = '';
  @Input() setClass:string = '';
  @Input() set matfix(val:BooleanInput){
    this.fixClass = coerceBooleanProperty(val);
  }

}
