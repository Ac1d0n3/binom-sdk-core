import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateSwitchComponent } from './translate-switch.component';

describe('TranslateSwitchComponent', () => {
  let component: TranslateSwitchComponent;
  let fixture: ComponentFixture<TranslateSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranslateSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
