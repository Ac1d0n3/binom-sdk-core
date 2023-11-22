import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateAndNumberPipeComponent } from './date-and-number-pipe.component';

describe('DateAndNumberPipeComponent', () => {
  let component: DateAndNumberPipeComponent;
  let fixture: ComponentFixture<DateAndNumberPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateAndNumberPipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DateAndNumberPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
