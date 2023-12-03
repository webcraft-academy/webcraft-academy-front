import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleGenjutsuPageComponent } from './rule-genjutsu-page.component';

describe('RuleGenjutsuPageComponent', () => {
  let component: RuleGenjutsuPageComponent;
  let fixture: ComponentFixture<RuleGenjutsuPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleGenjutsuPageComponent]
    });
    fixture = TestBed.createComponent(RuleGenjutsuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
