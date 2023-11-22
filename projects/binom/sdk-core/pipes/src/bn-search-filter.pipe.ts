import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnSearchFilter',
  standalone:true
})
export class BnSearchFilterPipe implements PipeTransform {

  transform(items: any[], field:string, value: string): any[] {

    if(!items) return [];
    if(!value) return items;

    return items.filter( str => {
          if(!str[field]) return false;
          return str[field].toLowerCase().includes(value.toLowerCase());
        });
   }

}
