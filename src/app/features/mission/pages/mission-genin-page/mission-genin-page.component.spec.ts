import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionGeninPageComponent } from './mission-genin-page.component';

describe('MissionGeninPageComponent', () => {
  let component: MissionGeninPageComponent;
  let fixture: ComponentFixture<MissionGeninPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionGeninPageComponent]
    });
    fixture = TestBed.createComponent(MissionGeninPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
