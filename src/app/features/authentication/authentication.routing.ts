import { Routes } from '@angular/router';
import { BoxedLoginComponent } from './boxed-login/boxed-login.component';


export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BoxedLoginComponent,
      },
    ],
  },
];
