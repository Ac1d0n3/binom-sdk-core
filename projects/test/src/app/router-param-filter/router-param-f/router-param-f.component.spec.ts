import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterParamFComponent } from './router-param-f.component';

describe('RouterParamFComponent', () => {
  let component: RouterParamFComponent;
  let fixture: ComponentFixture<RouterParamFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterParamFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterParamFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
