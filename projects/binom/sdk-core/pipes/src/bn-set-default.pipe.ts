import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnSetDefault',
  standalone: true
})
export class BnSetDefaultPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
