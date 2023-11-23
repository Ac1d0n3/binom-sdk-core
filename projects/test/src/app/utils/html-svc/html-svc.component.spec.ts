import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSvcComponent } from './html-svc.component';

describe('HtmlSvcComponent', () => {
  let component: HtmlSvcComponent;
  let fixture: ComponentFixture<HtmlSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
