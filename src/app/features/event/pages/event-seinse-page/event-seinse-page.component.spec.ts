import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSeinsePageComponent } from './event-seinse-page.component';

describe('EventSeinsePageComponent', () => {
  let component: EventSeinsePageComponent;
  let fixture: ComponentFixture<EventSeinsePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventSeinsePageComponent]
    });
    fixture = TestBed.createComponent(EventSeinsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
