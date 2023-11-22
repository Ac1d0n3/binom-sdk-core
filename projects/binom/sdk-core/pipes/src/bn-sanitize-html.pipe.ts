import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnSanitizeHtml',
  standalone: true
})
export class BnSanitizeHtmlPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
