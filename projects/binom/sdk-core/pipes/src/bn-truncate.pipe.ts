import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnTruncate',
  standalone: true
})
export class BnTruncatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
