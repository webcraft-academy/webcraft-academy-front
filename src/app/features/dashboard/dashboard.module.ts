import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeninPageComponent } from './pages/genin-page/genin-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { DashboardRoutes } from './dashboard.routing';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GeninPageComponent,
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
  ]
})
export class DashboardModule { }
