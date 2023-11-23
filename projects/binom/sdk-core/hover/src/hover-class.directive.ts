import { Directive, HostListener, ElementRef, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[bnHoverClass]',
  standalone: true
})
export class BnHoverClassDirective implements OnInit {

  constructor(public elementRef:ElementRef) {}


  @Input('bnHoverClass') hoverClass:any;
  @Input('disabled') isDisabled:boolean = false;

  ngOnInit(){
    if(this.hoverClass == 'scrollOnHover')
    this.elementRef.nativeElement.classList.add(this.hoverClass);
  }

  @HostListener('mouseenter') onMouseEnter() {
    if(this.hoverClass != '' && !this.isDisabled){
      if(this.hoverClass == 'scrollOnHover') this.hoverClass += 'Active'
      this.elementRef.nativeElement.classList.add(this.hoverClass);
    }
 }

  @HostListener('mouseleave' ) onMouseLeave() {
    if(this.hoverClass != '' && !this.isDisabled && this.hoverClass !== 'scrollOnHover'){
      this.elementRef.nativeElement.classList.remove(this.hoverClass);
    }
  }

}
