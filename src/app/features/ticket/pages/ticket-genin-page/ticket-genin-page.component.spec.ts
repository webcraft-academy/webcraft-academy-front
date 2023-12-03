import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketGeninPageComponent } from './ticket-genin-page.component';

describe('TicketGeninPageComponent', () => {
  let component: TicketGeninPageComponent;
  let fixture: ComponentFixture<TicketGeninPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketGeninPageComponent]
    });
    fixture = TestBed.createComponent(TicketGeninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
