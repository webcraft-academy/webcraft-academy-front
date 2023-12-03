import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: 'academy',
    component: FullComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'team',
        loadChildren: () =>
          import('./features/team/team.module').then(
            (m) => m.TeamModule
          ),
      },
      {
        path: 'event',
        loadChildren: () =>
          import('./features/event/event.module').then(
            (m) => m.EventModule
          ),
      },
      {
        path: 'quiz',
        loadChildren: () =>
          import('./features/quiz/quiz.module').then(
            (m) => m.QuizModule
          ),
      },
      {
        path: 'tickets',
        loadChildren: () =>
          import('./features/ticket/ticket.module').then(
            (m) => m.TicketModule
          ),
      },
      {
        path: 'rules',
        loadChildren: () =>
          import('./features/rules/rules.module').then(
            (m) => m.RulesModule
          ),
      },
      {
        path: 'mission',
        loadChildren: () =>
          import('./features/mission/mission.module').then(
            (m) => m.MissionModule
          ),
      },
      {
        path: 'starter',
        loadChildren: () =>
          import('./features/features.module').then((m) => m.FeaturesModule),
      },
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
     
    ],
  },
  {
    path: 'starter',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
  {
    path: 'website',
    loadChildren: () =>
      import('./features/website/website.module').then((m) => m.WebsiteModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
