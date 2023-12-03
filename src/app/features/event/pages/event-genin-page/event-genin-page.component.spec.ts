import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventGeninPageComponent } from './event-genin-page.component';

describe('EventGeninPageComponent', () => {
  let component: EventGeninPageComponent;
  let fixture: ComponentFixture<EventGeninPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventGeninPageComponent]
    });
    fixture = TestBed.createComponent(EventGeninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
