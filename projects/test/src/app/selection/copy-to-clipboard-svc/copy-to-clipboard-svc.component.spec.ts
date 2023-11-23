import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyToClipboardSvcComponent } from './copy-to-clipboard-svc.component';

describe('CopyToClipboardSvcComponent', () => {
  let component: CopyToClipboardSvcComponent;
  let fixture: ComponentFixture<CopyToClipboardSvcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyToClipboardSvcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopyToClipboardSvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
