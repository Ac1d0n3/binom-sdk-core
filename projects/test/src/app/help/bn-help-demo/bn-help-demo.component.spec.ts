import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnHelpDemoComponent } from './bn-help-demo.component';

describe('BnHelpDemoComponent', () => {
  let component: BnHelpDemoComponent;
  let fixture: ComponentFixture<BnHelpDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnHelpDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnHelpDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
