import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeInvoiceComponent } from './edite-invoice.component';

describe('EditeInvoiceComponent', () => {
  let component: EditeInvoiceComponent;
  let fixture: ComponentFixture<EditeInvoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeInvoiceComponent]
    });
    fixture = TestBed.createComponent(EditeInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
