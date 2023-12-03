import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StarterComponent } from './starter/starter.component';
import { FeaturesRoutes } from './features.routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(FeaturesRoutes),
    StarterComponent
  ],
})
export class FeaturesModule {}