import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomMatPagiComponent } from './custom-mat-pagi.component';

describe('CustomMatPagiComponent', () => {
  let component: CustomMatPagiComponent;
  let fixture: ComponentFixture<CustomMatPagiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomMatPagiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomMatPagiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
