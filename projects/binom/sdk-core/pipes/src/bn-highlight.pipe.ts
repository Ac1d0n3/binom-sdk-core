import { Pipe, PipeTransform} from '@angular/core'
import { DomSanitizer} from '@angular/platform-browser'


@Pipe({
    name: 'bnhighlight',
    standalone:true
})
export class BnHighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer){ }

  __escape(string:any) {
    if(string !== null){ return string.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    } else return null
  };

  transform(value: any, args: any): any {
    if (!args || typeof value !== 'string') {

      return this.sanitizer.bypassSecurityTrustHtml(value);
    }
    // Match in a case insensitive maneer
    if(args !== undefined && args !== null){
      const re = new RegExp(this.__escape(args), 'gi');
      const  match = value.match(re);
      if (!match) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
      }
      if(re){
        const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
        return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
      }
    }


  }
}
