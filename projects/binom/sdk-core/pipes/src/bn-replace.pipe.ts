import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnReplace',
  standalone: true
})
export class BnReplacePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
