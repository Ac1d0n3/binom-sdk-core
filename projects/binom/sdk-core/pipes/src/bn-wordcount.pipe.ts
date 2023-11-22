import { Pipe, PipeTransform } from '@angular/core';
// {{ customText | wordcount }}
@Pipe({
  name: 'bnwordcount',
  standalone:true
})
export class BnWordcountPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.trim().split(/\s+/).length;
  }

}
