import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BnSelectionAndCaretService {

  constructor() { }

  async getSelectionAsync(): Promise<Selection | null> {
    if (window && window.getSelection) {
      return window.getSelection();
    } else if (document && document.getSelection) {
      return document.getSelection();
    } else if (document && (document as any).selection) {
      return (document as any).selection.createRange().text;
    }
    return null;
  }

 getSelection() {
    if (window && window.getSelection) {
      return window.getSelection();
    } else if (document && document.getSelection) {
      return document.getSelection();
    } else if (document && (document as any).selection) {
      return (document as any).selection.createRange().text;
    }
    return null;
  }

  private getCaretElement(x:number,y:number){
    return document.elementFromPoint(x, y);
  }

  getCaretPositionElementEnd(){

  }

  private getCaretPosition(){
     let x:number = 0;
     let y:number = 0;
     const isSupported = typeof window.getSelection !== "undefined";
     if (isSupported) {
       const selection = window.getSelection();
       if(selection !== null){
         if (selection.rangeCount !== 0) {
           const range = selection.getRangeAt(0)!.cloneRange();
           range.collapse(true);
           const rect = range.getClientRects()[0];
           if (rect) {
             x = rect.left;
             y = rect.top;
           }
         }
       }
     }
     return { x, y };
  }

  private getCaretIndex(editableDiv:HTMLElement) {
    let position:number = 0;
    let range = this.getCaretRange();
    if(range !== null){
      const range = window.getSelection()!.getRangeAt(0);
      const preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(editableDiv);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      position = preCaretRange.toString().length;
    }
    return position;
  }

  getCaretRange(){
    let range:any = null;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
      const selection = window.getSelection();
      if(selection !== null){
        if (selection.rangeCount !== 0) {
          range = window.getSelection()!.getRangeAt(0);
        }
      }
    }
    return range;
  }

  getSelectionText(range:any){
    let onlyCursor:boolean = false;
    let selection:any = this.getSelection();
    let selectionText:string = selection.toString();
    if(range){
      if(selectionText === ''){
        if(selection.baseNode)
          if(selection.baseNode.data)
            selectionText = selection.baseNode.data;
      }
  
      if(range.startOffset === range.endOffset){
        onlyCursor = true;
        //selectionText = ''
      }
  
  
      return {
        selectionIsOnlyCuror: onlyCursor,
        selection: selection,
        selectionText: selectionText
      }
    } else return {
      selectionIsOnlyCuror:  onlyCursor,
      selection: selection,
      selectionText: selectionText
    }
   
  }

  getSelectionParts(element:any, selection:any, range:any){

    let isComplete:boolean = false;
    

    if(element.innerText === selection.selectionText){
      isComplete = true;
    }

    let start:string = '';
    let end:string = '';
    if(!isComplete && range){
      start = element.innerText.substring(0,range.startOffset)
      end = element.innerText.substring(range.endOffset,element.innerText.length)
    }

    
    let parts = {
      isComplete: isComplete,
      start: start,
      end: end,
      elementTag: element.tagName,
      elementStyles: element.style
    }

    return parts

  }

  getCaretInfo(editableDiv:HTMLElement){
  
    let pos:any = this.getCaretPosition();
    let ran:any = this.getCaretRange();
    let sel:any = this.getSelectionText(ran);
    let el:any = this.getCaretElement(pos.x,pos.y);
    let selParts:any = this.getSelectionParts(el, sel, ran);

    if(el === null) el = editableDiv;
    return {
      pos: pos,
      index: this.getCaretIndex(editableDiv),
      range: ran,
      selection: sel.selection,
      selectionText: sel.selectionText,
      onlyCursor: sel.selectionIsOnlyCuror,
      selectionParts: selParts,
      element: el
    }
  }

  insertAfterElement(content:any, newNode:any, referenceNode:any) {
    return content.replace( referenceNode.outerHTML, referenceNode.outerHTML + newNode);
  }

  replaceElement(content:any, newNode:any, referenceNode:any){
    referenceNode.parentNode.replaceChild(newNode, referenceNode);
    return null
  }

  insertAfterSelection(newNode:any, caretInfo:any) {
    let range:any = caretInfo.range;
    range.deleteContents();
    let el:any = document.createElement("div");
    el.innerHTML = newNode;
    let frag:any = document.createDocumentFragment();
    let lastNode:any = null;
    let node:any = null;
    while ( (node = el.firstChild) ) {
       lastNode = frag.appendChild(node);
    }
    range.insertNode(frag);
    if (lastNode !== null) {
        range = range.cloneRange();
        range.setStartAfter(lastNode);
        range.collapse(true);
    }
    return null
  }

}
