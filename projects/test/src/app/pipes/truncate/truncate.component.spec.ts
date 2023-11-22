import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateComponent } from './truncate.component';

describe('TruncateComponent', () => {
  let component: TruncateComponent;
  let fixture: ComponentFixture<TruncateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TruncateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TruncateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
