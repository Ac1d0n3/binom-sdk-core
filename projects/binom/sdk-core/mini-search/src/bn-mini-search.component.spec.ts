import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnMiniSearchComponent } from './bn-mini-search.component';

describe('BnMiniSearchComponent', () => {
  let component: BnMiniSearchComponent;
  let fixture: ComponentFixture<BnMiniSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnMiniSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnMiniSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
