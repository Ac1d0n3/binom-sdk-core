import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnLabelValueComponent } from './bn-label-value.component';

describe('BnLabelValueComponent', () => {
  let component: BnLabelValueComponent;
  let fixture: ComponentFixture<BnLabelValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnLabelValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnLabelValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
