import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSuffixInfoComponent } from './bn-suffix-info.component';

describe('BnSuffixInfoComponent', () => {
  let component: BnSuffixInfoComponent;
  let fixture: ComponentFixture<BnSuffixInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnSuffixInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnSuffixInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
