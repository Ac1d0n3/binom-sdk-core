import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BnHTMLService {

  constructor(private sanitizer: DomSanitizer) {}


  makeHTMLSafe(htmlVal: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlVal);
  }

  escapeHTML(htmlVal: string): string {
    return htmlVal.replace(/[&<>"']/g, (match) => {
      switch (match) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case "'":
          return '&#39;';
        default:
          return match;
      }
    });
  }

  removeClasses(htmlVal: string, classNames: string[]): string {
    const regex = new RegExp(`\\s*(${classNames.join('|')})\\s*`, 'g');
    return htmlVal.replace(regex, '');
  }

  removeEmptyTags(htmlVal: string): string {
    const regex = /<([^\/>]+)>\s*<\/\1>/g;
    return htmlVal.replace(regex, '');
  }

  removeEmptySpansWithoutAttributes(htmlVal: string): string {
    const regex = /<span[^>]*><\/span>/g;
    return htmlVal.replace(regex, '');
  }

  removeScripts(htmlVal: string): string {
    const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    return htmlVal.replace(regex, '');
  }

  cleanCodeBlocksString(content:string){
    if(content){
      let codeBlock = content.match(/<code>(.|\n)*?<\/code>|<code class="[a-z\-]*">(.|\n)*?<\/code>/gmi);
      if(codeBlock !== null){
        codeBlock.forEach((cb:any) => {
          content = content.replace(cb,this.cleanCodeBlockString(cb))
        });
      }
    }
    return content
  }

  private cleanCodeBlockString(content:string){
    let nVal = content.replace(/<span class="[^>]*">|<\/span>|<span>|<span aria-hidden="true" class="[a-z\-]*">/gmi,'')
    return nVal
  }
  

  cleanUp(htmlVal: string, removeScripts: boolean = false): string {
    let cleanedHtml = htmlVal;
    if (removeScripts) {
      cleanedHtml = this.removeScripts(cleanedHtml);
    }
    cleanedHtml = this.removeEmptyTags(cleanedHtml);
    cleanedHtml = this.removeEmptySpansWithoutAttributes(cleanedHtml);
    return cleanedHtml;
  }

  cleanUpWithCodeBlocks(htmlVal: string, removeScripts: boolean = false): string {
    let cleanedHtml =  this.cleanUp(htmlVal, removeScripts);
    cleanedHtml = this.cleanCodeBlocksString(cleanedHtml);
    return cleanedHtml;
  }


 

}
