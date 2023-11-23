import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnKeyValueComponent } from './bn-key-value.component';

describe('BnKeyValueComponent', () => {
  let component: BnKeyValueComponent;
  let fixture: ComponentFixture<BnKeyValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnKeyValueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnKeyValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
