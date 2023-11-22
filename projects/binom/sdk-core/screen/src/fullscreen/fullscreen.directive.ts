import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { tap } from "rxjs/operators";
@Directive({
  selector: "[fullscreen]",
  exportAs: "fullscreen", // <-- Make not of this here
  standalone:true
})
export class BnFullScreenDirective {
  private isMaximizedSubject = new BehaviorSubject(false);
  isMaximized$ = this.isMaximizedSubject.pipe();
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  toggle() {
    this.isMaximizedSubject?.getValue() ? this.minimize() : this.maximize();
  }
  maximize() {
    if (this.el) {
      this.isMaximizedSubject.next(true);
      this.renderer.addClass(this.el.nativeElement, "bn-fullscreen");
    }
  }
  minimize() {
    if (this.el) {
      this.isMaximizedSubject.next(false);
      this.renderer.removeClass(this.el.nativeElement, "bn-fullscreen");
    }
  }
}
