import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGeninPageComponent } from './team-genin-page.component';

describe('TeamGeninPageComponent', () => {
  let component: TeamGeninPageComponent;
  let fixture: ComponentFixture<TeamGeninPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamGeninPageComponent]
    });
    fixture = TestBed.createComponent(TeamGeninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
