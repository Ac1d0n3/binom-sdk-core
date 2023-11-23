import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterAndTitleSvcComponent } from './router-and-title-svc.component';

describe('RouterAndTitleSvcComponent', () => {
  let component: RouterAndTitleSvcComponent;
  let fixture: ComponentFixture<RouterAndTitleSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterAndTitleSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterAndTitleSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
