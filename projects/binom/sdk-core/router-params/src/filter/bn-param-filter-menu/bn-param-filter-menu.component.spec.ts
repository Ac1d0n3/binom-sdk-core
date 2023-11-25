import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnParamFilterMenuComponent } from './bn-param-filter-menu.component';

describe('BnParamFilterMenuComponent', () => {
  let component: BnParamFilterMenuComponent;
  let fixture: ComponentFixture<BnParamFilterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnParamFilterMenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnParamFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
