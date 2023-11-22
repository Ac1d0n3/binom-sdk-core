import { Renderer2, ElementRef, RendererStyleFlags2 } from '@angular/core';

export class RendererUtils {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  // Styles Helper
  setStyle(sKey: string, sValue: string, important:boolean = false): void {
    important?
      this.renderer.setStyle(this.el.nativeElement, sKey, sValue , RendererStyleFlags2.Important):
      this.renderer.setStyle(this.el.nativeElement, sKey, sValue );
  }

  removeStyle(styleName: string): void {
    this.renderer.removeStyle(this.el.nativeElement, styleName)
  }

  removeStyles(removeList: string[]): void {
    removeList.forEach((remove: string) => this.renderer.removeStyle(this.el.nativeElement, remove));
  }

  toggleStyle(toggle:Boolean, sKey: string, sValue: string):void {
    toggle? this.setStyle(sKey, sValue ) : this.removeStyle(sKey);
  }

  // Class Helper
  addClass(className: string): void {
    this.renderer.addClass(this.el.nativeElement, className);
  }

  removeClasses(removeList: string[]): void {
    removeList.forEach((remove: string) => this.renderer.removeClass(this.el.nativeElement, remove));
  }

  addClasses(classNames: string[]): void {
    classNames.forEach((className: string) => this.renderer.addClass(this.el.nativeElement, className));
  }

  removeClass(className: string): void {
    this.renderer.removeClass(this.el.nativeElement, className);
  }

  toggleClass(toggle:Boolean,className:string):void{
    this.renderer[toggle? 'addClass': 'removeClass'](this.el.nativeElement, className);
  }

  toggleOnOff(toggle:Boolean, onClass:string, offClass:string){
    if(toggle){
      this.addClass(onClass);
      this.removeClass(offClass);
    } else {
      this.removeClass(onClass);
      this.addClass(offClass);
    }    
  }

  // Other Helper
  getParentNodeAttribute(attr:string):string {
    const parentWrapper = this.renderer.parentNode(this.el.nativeElement);
    return parentWrapper.getAttribute(attr);
  }

  getElementSize(): { height:number, width:number } {
    return { height: this.el.nativeElement.offsetHeight || 50, width :this.el.nativeElement.offsetWidth}
  }

  toggleShadow(toggle:Boolean, shadowLevel:number){
    this.toggleClass(toggle, 'mat-elevation-z' + shadowLevel);
  }

  toggleMaxWidth(toggle:Boolean, maxWidth:number) {
    this.toggleStyle(toggle && maxWidth > 0, 'max-width', maxWidth + 'px');
  }

  toggleMinWidth(toggle:Boolean, minWidth:number) {
    this.toggleStyle(toggle && minWidth > 0, 'min-width', minWidth + 'px');
  }
  
  toggleWidth(toggle:Boolean, width:string) {
    toggle ? this.setStyle('width',width) : this.setStyle('width', '100%');
  }

  toggleHeight(toggle: Boolean, height:string, def:string='auto') {
    toggle ? this.setStyle('height',height) : this.setStyle('height', def);
  }

  toggleVisible(visible:Boolean){
    visible ? this.removeStyle('display') : this.setStyle('display', 'none') ; 
  }

  toggleOverflow(toggle:Boolean) {
    toggle ? this.setStyle('overflow','auto') : this.removeStyle('overflow');
  }

  toggleZindex(toggle:Boolean, zIndex:string) {
    toggle ? this.setStyle('z-index',zIndex) : this.removeStyle('z-index');
  }

  setHeight(height:number){
    this.setStyle('height', height+'px');
  }

  setBorder( color:string='black', width:string = '1px',  style:string='solid'){
    this.setStyle('border', width + ' ' + style + ' ' +color);
  }

  toggleCenterView(centeredX:Boolean, centeredY:Boolean) { centeredX || centeredY ? this.centerView(centeredX, centeredY) : this.unCenterView(); }
  centerView(centeredX:Boolean, centeredY:Boolean) { this.addClass( 'bnl-center-' + (centeredX ? 'x' : '') + (centeredY ? 'y' : '')) }
  unCenterView() { this.removeClasses(['bnl-center-x', 'bnl-center-y', 'bnl-center-xy']); }

  addElementIdClasses(elTag:string ,id:string){ this.addClasses(['bnl-el-'+elTag, 'bnl-' + elTag +'-'+ id]); }

  insertBefore(insertEl:HTMLElement){
    this.renderer.insertBefore( this.el.nativeElement.parentNode, insertEl, this.el.nativeElement);
  }
}