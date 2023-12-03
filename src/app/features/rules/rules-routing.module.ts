import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulePageComponent } from './pages/rule-page.component'

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RulePageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
