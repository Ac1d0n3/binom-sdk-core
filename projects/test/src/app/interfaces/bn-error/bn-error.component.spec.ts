import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnErrorComponent } from './bn-error.component';

describe('BnErrorComponent', () => {
  let component: BnErrorComponent;
  let fixture: ComponentFixture<BnErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
