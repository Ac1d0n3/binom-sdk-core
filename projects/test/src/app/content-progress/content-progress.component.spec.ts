import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProgressComponent } from './content-progress.component';

describe('ContentProgressComponent', () => {
  let component: ContentProgressComponent;
  let fixture: ComponentFixture<ContentProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
