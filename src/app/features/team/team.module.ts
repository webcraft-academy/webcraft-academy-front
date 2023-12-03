import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamRoutingModule } from './team-routing.module';

import { TeamAdminPageComponent } from './pages/team-admin-page/team-admin-page.component';
import { TeamGeninPageComponent } from './pages/team-genin-page/team-genin-page.component';


@NgModule({
  declarations: [

    TeamAdminPageComponent,
    TeamGeninPageComponent
  ],
  imports: [
    CommonModule,
    TeamRoutingModule
  ]
})
export class TeamModule { }
