import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnSearchBoxComponent } from './bn-search-box.component';

describe('BnSearchBoxComponent', () => {
  let component: BnSearchBoxComponent;
  let fixture: ComponentFixture<BnSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BnSearchBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BnSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
