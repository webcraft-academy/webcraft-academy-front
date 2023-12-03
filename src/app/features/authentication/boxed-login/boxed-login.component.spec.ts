import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxedLoginComponent } from './boxed-login.component';

describe('BoxedLoginComponent', () => {
  let component: BoxedLoginComponent;
  let fixture: ComponentFixture<BoxedLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxedLoginComponent]
    });
    fixture = TestBed.createComponent(BoxedLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
