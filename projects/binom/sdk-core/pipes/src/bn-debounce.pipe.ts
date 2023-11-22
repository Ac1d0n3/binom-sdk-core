import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnDebounce',
  standalone: true
})
export class BnDebouncePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
