import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnHelpSwitchComponent } from './bn-help-switch.component';

describe('BnHelpSwitchComponent', () => {
  let component: BnHelpSwitchComponent;
  let fixture: ComponentFixture<BnHelpSwitchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnHelpSwitchComponent]
    });
    fixture = TestBed.createComponent(BnHelpSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
