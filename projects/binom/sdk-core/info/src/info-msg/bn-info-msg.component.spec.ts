import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnInfoMsgComponent } from './bn-info-msg.component';

describe('BnInfoMsgComponent', () => {
  let component: BnInfoMsgComponent;
  let fixture: ComponentFixture<BnInfoMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnInfoMsgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnInfoMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
