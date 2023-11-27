import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ContenteditableValueAccessor } from './value-accessor.directive';

@Component({
  template: `
    <div contenteditable [ngModel]="model" (ngModelChange)="updateModel($event)"></div>
  `,
})
class TestComponent {
  model = '';

  updateModel(value: string) {
    this.model = value;
  }
}

describe('ContenteditableValueAccessor', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let directive: ContenteditableValueAccessor;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenteditableValueAccessor, TestComponent],
      imports: [FormsModule, ReactiveFormsModule],
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    directive = fixture.debugElement.query(By.directive(ContenteditableValueAccessor)).injector.get(ContenteditableValueAccessor);
    element = fixture.debugElement.query(By.css('[contenteditable]')).nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  it('should update model on input', () => {
    const newValue = 'Test Input Value';
    element.innerHTML = newValue;
    const inputEvent = new Event('input');
    element.dispatchEvent(inputEvent);

    expect(component.model).toEqual(newValue);
  });

 

  it('should update contenteditable value when model changes', () => {
    const newValue = 'Test Model Value';
    component.model = newValue;
    fixture.detectChanges();

    expect(element.innerHTML).toEqual(newValue);
  });

  it('should call observer callback when content changes', () => {
    const spy = spyOn(directive, 'onInput').and.callThrough();
    const newValue = 'Test Input Value';
    element.innerHTML = newValue;
    const inputEvent = new Event('input');
    element.dispatchEvent(inputEvent);

    expect(spy).toHaveBeenCalled();
  });

  // Add more test cases as needed
});
