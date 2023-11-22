import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordcountComponent } from './wordcount.component';

describe('WordcountComponent', () => {
  let component: WordcountComponent;
  let fixture: ComponentFixture<WordcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordcountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
