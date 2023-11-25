import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnHelpSvcComponent } from './bn-help-svc.component';

describe('BnHelpSvcComponent', () => {
  let component: BnHelpSvcComponent;
  let fixture: ComponentFixture<BnHelpSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnHelpSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnHelpSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
