import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnHelpSwitchMenuComponent } from './bn-help-switch-menu.component';

describe('BnHelpSwitchMenuComponent', () => {
  let component: BnHelpSwitchMenuComponent;
  let fixture: ComponentFixture<BnHelpSwitchMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnHelpSwitchMenuComponent]
    });
    fixture = TestBed.createComponent(BnHelpSwitchMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
