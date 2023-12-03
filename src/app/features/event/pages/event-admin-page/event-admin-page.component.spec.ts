import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAdminPageComponent } from './event-admin-page.component';

describe('EventAdminPageComponent', () => {
  let component: EventAdminPageComponent;
  let fixture: ComponentFixture<EventAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventAdminPageComponent]
    });
    fixture = TestBed.createComponent(EventAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
