import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnElSizeComponent } from './bn-el-size.component';

describe('BnElSizeComponent', () => {
  let component: BnElSizeComponent;
  let fixture: ComponentFixture<BnElSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnElSizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnElSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
