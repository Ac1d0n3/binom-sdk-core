import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsUtilsSvcComponent } from './colors-utils-svc.component';

describe('ColorsUtilsSvcComponent', () => {
  let component: ColorsUtilsSvcComponent;
  let fixture: ComponentFixture<ColorsUtilsSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorsUtilsSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorsUtilsSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
