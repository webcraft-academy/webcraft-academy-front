import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamSeinsePageComponent } from './pages/team-seinse-page/team-seinse-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TeamSeinsePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamRoutingModule { }
