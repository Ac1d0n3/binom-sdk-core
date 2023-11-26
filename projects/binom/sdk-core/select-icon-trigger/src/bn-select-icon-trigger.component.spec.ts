import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSelectIconTriggerComponent } from './bn-select-icon-trigger.component';

describe('BnSelectIconTriggerComponent', () => {
  let component: BnSelectIconTriggerComponent;
  let fixture: ComponentFixture<BnSelectIconTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnSelectIconTriggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnSelectIconTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
