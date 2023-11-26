import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixInfoComponent } from './suffix-info.component';

describe('SuffixInfoComponent', () => {
  let component: SuffixInfoComponent;
  let fixture: ComponentFixture<SuffixInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuffixInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuffixInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
