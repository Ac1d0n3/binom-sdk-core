import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BnCopyToClipboardService {

  constructor() { }

  async fallbackCopyTextToClipboard(text:string) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      return true;
    } catch (err) {
      return err
    }
    document.body.removeChild(textArea);
  }

  copyToClipBoard(text:string): Promise<any>{
    if (!navigator.clipboard) {
      return this.fallbackCopyTextToClipboard(text)
    } else {
      return navigator.clipboard.writeText(text).then(function() {
        return true;
      }, function(err) {
        return err
      });
    }
  }

  copyHTMLElementToClipBoard(element:any){
    try {
      const blobInput = new Blob([element.outerHTML], {type: 'text/html'});
      const clipboardItemInput = new ClipboardItem({'text/html' : blobInput});
      navigator.clipboard.write([clipboardItemInput]);
    } catch(e) {
      // Handle error with user feedback - "Copy failed!" kind of thing
      console.log(e);
    }
  }
}
