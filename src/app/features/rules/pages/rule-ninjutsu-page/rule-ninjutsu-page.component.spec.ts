import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleNinjutsuPageComponent } from './rule-ninjutsu-page.component';

describe('RuleNinjutsuPageComponent', () => {
  let component: RuleNinjutsuPageComponent;
  let fixture: ComponentFixture<RuleNinjutsuPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleNinjutsuPageComponent]
    });
    fixture = TestBed.createComponent(RuleNinjutsuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
