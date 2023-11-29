import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnProgressContentComponent } from './bn-progress-content.component';

describe('BnProgressContentComponent', () => {
  let component: BnProgressContentComponent;
  let fixture: ComponentFixture<BnProgressContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnProgressContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnProgressContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
