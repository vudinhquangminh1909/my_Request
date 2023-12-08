import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLegalEntityComponent } from './view-legal-entity.component';

describe('ViewLegalEntityComponent', () => {
  let component: ViewLegalEntityComponent;
  let fixture: ComponentFixture<ViewLegalEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLegalEntityComponent]
    });
    fixture = TestBed.createComponent(ViewLegalEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
