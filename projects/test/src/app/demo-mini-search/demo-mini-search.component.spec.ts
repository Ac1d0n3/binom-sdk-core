import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMiniSearchComponent } from './demo-mini-search.component';

describe('DemoMiniSearchComponent', () => {
  let component: DemoMiniSearchComponent;
  let fixture: ComponentFixture<DemoMiniSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoMiniSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoMiniSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
