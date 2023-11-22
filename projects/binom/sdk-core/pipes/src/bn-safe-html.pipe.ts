import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnSafeHtml',
  standalone: true
})
export class BnSafeHtmlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
