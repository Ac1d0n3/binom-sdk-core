import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterParamFilterSvcComponent } from './router-param-filter-svc.component';

describe('RouterParamFilterSvcComponent', () => {
  let component: RouterParamFilterSvcComponent;
  let fixture: ComponentFixture<RouterParamFilterSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterParamFilterSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterParamFilterSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
