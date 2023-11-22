import { Pipe, PipeTransform } from '@angular/core';
//[name]="folder.icon | bnSetDefault:'Folder'"
@Pipe({
  name: 'bnSetDefault', 
  pure:true,
  standalone:true
})
export class BnSetDefaultPipe implements PipeTransform {

  transform(value: any, defaultValue: any): any {
       return value || defaultValue;
   }

}