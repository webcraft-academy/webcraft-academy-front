import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissionPageComponent } from './pages/mission-page.component'

const routes: Routes = [
  {
    path: '',
    component: MissionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MissionRoutingModule { }
