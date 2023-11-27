import {
    AfterViewInit,
    Directive,
    ElementRef,
    forwardRef,
    HostListener,
    Inject,
    OnDestroy,
    Renderer2,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
    selector:
        '[contenteditable][formControlName], [contenteditable][formControl], [contenteditable][ngModel]',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ContenteditableValueAccessor),
            multi: true,
        },
    ],
    standalone:true
})
export class ContenteditableValueAccessor
    implements ControlValueAccessor, AfterViewInit, OnDestroy {
    private observer = new MutationObserver(() => {
        setTimeout(() => {
            this.onChange(
                ContenteditableValueAccessor.processValue(
                    this.elementRef.nativeElement.innerHTML,
                ),
            );
        });
    });

    private onTouched = () => {};
    private onChange: (value: string) => void = () => {};

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef,
        @Inject(Renderer2) private readonly renderer: Renderer2,
    ) {}

   
    ngAfterViewInit() {
        this.observer.observe(this.elementRef.nativeElement, {
            characterData: true,
            childList: true,
            subtree: true,
        });
    }

    ngOnDestroy() {
        this.observer.disconnect();
    }

   
    @HostListener('input')
    onInput() {
        this.observer.disconnect();
        this.onChange(
            ContenteditableValueAccessor.processValue(
                this.elementRef.nativeElement.innerHTML,
            ),
        );
    }

    @HostListener('blur')
    onBlur() {
        this.onTouched();
    }

    writeValue(value: string | null) {
        this.renderer.setProperty(
            this.elementRef.nativeElement,
            'innerHTML',
            ContenteditableValueAccessor.processValue(value),
        );
    }

    registerOnChange(onChange: (value: string) => void) {
        this.onChange = onChange;
    }

    registerOnTouched(onTouched: () => void) {
        this.onTouched = onTouched;
    }

    setDisabledState(disabled: boolean) {
        this.renderer.setAttribute(
            this.elementRef.nativeElement,
            'contenteditable',
            String(!disabled),
        );
    }

    private static processValue(value: unknown): string {
        const processed = String(value == null ? '' : value);
        return processed.trim() === '<br>' ? '' : processed;
    }
}
