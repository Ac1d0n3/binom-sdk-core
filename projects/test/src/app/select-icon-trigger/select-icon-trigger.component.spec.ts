import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIconTriggerComponent } from './select-icon-trigger.component';

describe('SelectIconTriggerComponent', () => {
  let component: SelectIconTriggerComponent;
  let fixture: ComponentFixture<SelectIconTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectIconTriggerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectIconTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
