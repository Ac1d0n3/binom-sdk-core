import { Pipe, PipeTransform } from '@angular/core';
// items | orderBy : order : reverse
@Pipe({
  name: 'bnSortBy', 
  pure:false,
  standalone:true
})
export class BnSortbyPipe implements PipeTransform {

  transform(items: any[], field: string, reverse: boolean = false): any[] {
    if (!items) return [];
    if (items.length === 0) return [];
    if (field) items.sort((a, b) => a[field] > b[field] ? 1 : -1);
    else items.sort((a, b) => a > b ? 1 : -1);

    if (reverse) items.reverse();

    return items;
  }

}
