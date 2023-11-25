import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I18nExComponent } from './i18n-ex.component';

describe('I18nExComponent', () => {
  let component: I18nExComponent;
  let fixture: ComponentFixture<I18nExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [I18nExComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(I18nExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
