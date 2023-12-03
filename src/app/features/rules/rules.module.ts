import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RulesRoutingModule } from './rules-routing.module';
import { RulePageComponent } from './pages/rule-page.component';
import { RuleTaijutsuPageComponent } from './pages/rule-taijutsu-page/rule-taijutsu-page.component';
import { RuleNinjutsuPageComponent } from './pages/rule-ninjutsu-page/rule-ninjutsu-page.component';
import { RuleGenjutsuPageComponent } from './pages/rule-genjutsu-page/rule-genjutsu-page.component';
import { MaterialModule } from '../../shared/material/material.module';


@NgModule({
  declarations: [
    RulePageComponent,
    RuleTaijutsuPageComponent,
    RuleNinjutsuPageComponent,
    RuleGenjutsuPageComponent
  ],
  imports: [
    CommonModule,
    RulesRoutingModule,
    MaterialModule
  ]
})
export class RulesModule { }
