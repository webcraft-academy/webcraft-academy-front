import { Routes } from '@angular/router';
import { SeinsePageComponent } from './pages/seinse-page/seinse-page.component';


export const DashboardRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SeinsePageComponent,
      },
    ],
  },
];
