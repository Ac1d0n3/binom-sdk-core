import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoverClassComponent } from './hover-class.component';

describe('HoverClassComponent', () => {
  let component: HoverClassComponent;
  let fixture: ComponentFixture<HoverClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HoverClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
