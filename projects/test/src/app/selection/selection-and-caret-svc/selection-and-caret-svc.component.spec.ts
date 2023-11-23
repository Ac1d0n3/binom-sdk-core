import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionAndCaretSvcComponent } from './selection-and-caret-svc.component';

describe('SelectionAndCaretSvcComponent', () => {
  let component: SelectionAndCaretSvcComponent;
  let fixture: ComponentFixture<SelectionAndCaretSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectionAndCaretSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectionAndCaretSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
