import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketPageComponent } from './pages/ticket-page.component';
import { TicketSeinsePageComponent } from './pages/ticket-seinse-page/ticket-seinse-page.component';
import { TicketGeninPageComponent } from './pages/ticket-genin-page/ticket-genin-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';


@NgModule({
  declarations: [
    TicketPageComponent,
    TicketSeinsePageComponent,
    TicketGeninPageComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    MaterialModule,
    TablerIconsModule,
    TablerIconsModule.pick(TablerIcons),
  ]
})
export class TicketModule { }
