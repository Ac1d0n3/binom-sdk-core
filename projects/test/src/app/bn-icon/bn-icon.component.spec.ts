import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnIconComponent } from './bn-icon.component';

describe('BnIconComponent', () => {
  let component: BnIconComponent;
  let fixture: ComponentFixture<BnIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
