import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteHomePageComponent } from './pages/website-home-page/website-home-page.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MatNativeDateModule } from '@angular/material/core';
import * as TablerIcons from 'angular-tabler-icons/icons';


@NgModule({
  declarations: [
    WebsiteHomePageComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule.pick(TablerIcons),
    MatNativeDateModule,
  ]
})
export class WebsiteModule { }
