import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpenceCodeComponent } from './view-expence-code.component';

describe('ViewExpenceCodeComponent', () => {
  let component: ViewExpenceCodeComponent;
  let fixture: ComponentFixture<ViewExpenceCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewExpenceCodeComponent]
    });
    fixture = TestBed.createComponent(ViewExpenceCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
