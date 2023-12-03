import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSeinsePageComponent } from './ticket-seinse-page.component';

describe('TicketSeinsePageComponent', () => {
  let component: TicketSeinsePageComponent;
  let fixture: ComponentFixture<TicketSeinsePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketSeinsePageComponent]
    });
    fixture = TestBed.createComponent(TicketSeinsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
