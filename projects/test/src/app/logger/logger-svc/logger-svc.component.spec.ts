import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerSvcComponent } from './logger-svc.component';

describe('LoggerSvcComponent', () => {
  let component: LoggerSvcComponent;
  let fixture: ComponentFixture<LoggerSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoggerSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoggerSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
