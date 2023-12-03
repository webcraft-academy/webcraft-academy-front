import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteHomePageComponent } from './pages/website-home-page/website-home-page.component';

const WebsiteRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: WebsiteHomePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(WebsiteRoutes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
