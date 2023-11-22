
import { ChangeDetectorRef, NgZone, Pipe } from '@angular/core';

@Pipe({
  name: 'bnDebounce', 
  pure: false,
  standalone:true
})
export class BnDebouncePipe {

  private currentValue: any = null;
   private transformValue: any = null;
   private timeoutHandle: any;

   constructor(
       private changeDetector: ChangeDetectorRef,
       private zone: NgZone,
   ) {
   }

   transform(value: any, debounceTime?: number): any {
       if (this.currentValue == null) {
           this.currentValue = value;
           return value;
       }
       if (this.currentValue === value) {
           // there is no value that needs debouncing at this point
           clearTimeout(this.timeoutHandle);
           return value;
       }
       if (this.transformValue !== value) {
           // there is a new value that needs to be debounced
           this.transformValue = value;
           clearTimeout(this.timeoutHandle);
           this.timeoutHandle = setTimeout(() => {
               this.zone.run(() => {
                   this.currentValue = this.transformValue;
                   this.transformValue = null;
                   this.changeDetector.markForCheck();
               });
           }, typeof debounceTime == 'number' ? debounceTime : 500);
       }
       return this.currentValue;
   }

}
