import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnWordcount',
  standalone: true
})
export class BnWordcountPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
