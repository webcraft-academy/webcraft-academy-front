import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAdminPageComponent } from './team-admin-page.component';

describe('TeamAdminPageComponent', () => {
  let component: TeamAdminPageComponent;
  let fixture: ComponentFixture<TeamAdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamAdminPageComponent]
    });
    fixture = TestBed.createComponent(TeamAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
