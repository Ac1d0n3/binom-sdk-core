import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetDefaultComponent } from './set-default.component';

describe('SetDefaultComponent', () => {
  let component: SetDefaultComponent;
  let fixture: ComponentFixture<SetDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetDefaultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SetDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
