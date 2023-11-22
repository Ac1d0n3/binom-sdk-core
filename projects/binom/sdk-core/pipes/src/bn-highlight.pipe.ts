import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnHighlight',
  standalone: true
})
export class BnHighlightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
