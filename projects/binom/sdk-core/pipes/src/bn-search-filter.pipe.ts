import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnSearchFilter',
  standalone: true
})
export class BnSearchFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
