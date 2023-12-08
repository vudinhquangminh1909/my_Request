import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVATComponent } from './view-vat.component';

describe('ViewVATComponent', () => {
  let component: ViewVATComponent;
  let fixture: ComponentFixture<ViewVATComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewVATComponent]
    });
    fixture = TestBed.createComponent(ViewVATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
