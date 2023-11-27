import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValAccessContentComponent } from './val-access-content.component';

describe('ValAccessContentComponent', () => {
  let component: ValAccessContentComponent;
  let fixture: ComponentFixture<ValAccessContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValAccessContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValAccessContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
