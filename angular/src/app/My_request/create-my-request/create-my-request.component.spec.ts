import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMyRequestComponent } from './create-my-request.component';

describe('CreateMyRequestComponent', () => {
  let component: CreateMyRequestComponent;
  let fixture: ComponentFixture<CreateMyRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMyRequestComponent]
    });
    fixture = TestBed.createComponent(CreateMyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
