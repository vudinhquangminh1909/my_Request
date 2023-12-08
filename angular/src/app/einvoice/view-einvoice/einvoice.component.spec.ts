import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EInvoiceComponent } from './einvoice.component';

describe('EInvoiceComponent', () => {
  let component: EInvoiceComponent;
  let fixture: ComponentFixture<EInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EInvoiceComponent]
    });
    fixture = TestBed.createComponent(EInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
