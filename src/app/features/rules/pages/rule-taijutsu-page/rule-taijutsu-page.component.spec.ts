import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleTaijutsuPageComponent } from './rule-taijutsu-page.component';

describe('RuleTaijutsuPageComponent', () => {
  let component: RuleTaijutsuPageComponent;
  let fixture: ComponentFixture<RuleTaijutsuPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleTaijutsuPageComponent]
    });
    fixture = TestBed.createComponent(RuleTaijutsuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
