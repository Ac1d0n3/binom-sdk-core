import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnFormErrorComponent } from './bn-form-error.component';

describe('BnFormErrorComponent', () => {
  let component: BnFormErrorComponent;
  let fixture: ComponentFixture<BnFormErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnFormErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
