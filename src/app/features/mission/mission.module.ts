import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionRoutingModule } from './mission-routing.module';
import { MissionGeninPageComponent } from './pages/mission-genin-page/mission-genin-page.component';
import { MissionSeinsePageComponent } from './pages/mission-seinse-page/mission-seinse-page.component';
import { MissionPageComponent } from './pages/mission-page.component';
import { MaterialModule } from '../../shared/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';


@NgModule({
  declarations: [
    MissionGeninPageComponent,
    MissionSeinsePageComponent,
    MissionPageComponent
  ],
  imports: [
    CommonModule,
    MissionRoutingModule,
    MaterialModule,
    TablerIconsModule,
    TablerIconsModule.pick(TablerIcons),
  ]
})
export class MissionModule { }
