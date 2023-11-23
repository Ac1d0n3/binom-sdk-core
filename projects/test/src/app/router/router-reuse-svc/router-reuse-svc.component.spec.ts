import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterReuseSvcComponent } from './router-reuse-svc.component';

describe('RouterReuseSvcComponent', () => {
  let component: RouterReuseSvcComponent;
  let fixture: ComponentFixture<RouterReuseSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterReuseSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterReuseSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
