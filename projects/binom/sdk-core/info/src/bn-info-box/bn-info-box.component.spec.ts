import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnInfoBoxComponent } from './bn-info-box.component';

describe('BnInfoBoxComponent', () => {
  let component: BnInfoBoxComponent;
  let fixture: ComponentFixture<BnInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnInfoBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
