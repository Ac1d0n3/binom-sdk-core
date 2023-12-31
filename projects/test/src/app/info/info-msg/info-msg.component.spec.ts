import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMsgComponent } from './info-msg.component';

describe('InfoMsgComponent', () => {
  let component: InfoMsgComponent;
  let fixture: ComponentFixture<InfoMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
