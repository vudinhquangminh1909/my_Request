import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKindOfFalComponent } from './view-kind-of-fal.component';

describe('ViewKindOfFalComponent', () => {
  let component: ViewKindOfFalComponent;
  let fixture: ComponentFixture<ViewKindOfFalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewKindOfFalComponent]
    });
    fixture = TestBed.createComponent(ViewKindOfFalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
