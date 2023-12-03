import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSeinsePageComponent } from './mission-seinse-page.component';

describe('MissionSeinsePageComponent', () => {
  let component: MissionSeinsePageComponent;
  let fixture: ComponentFixture<MissionSeinsePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MissionSeinsePageComponent]
    });
    fixture = TestBed.createComponent(MissionSeinsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
