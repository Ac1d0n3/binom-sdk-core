import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnSortBy',
  standalone: true
})
export class BnSortByPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
