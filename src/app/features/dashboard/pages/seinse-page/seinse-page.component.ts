import { Component } from '@angular/core';
import { TablerIconsModule } from 'angular-tabler-icons';

// components
import { AppTopCardsComponent } from '../../../../shared/components/dashboard1/top-cards/top-cards.component';
import { AppRevenueUpdatesComponent } from '../../../../shared/components/dashboard1/revenue-updates/revenue-updates.component';
import { AppYearlyBreakupComponent } from '../../../../shared/components/dashboard1/yearly-breakup/yearly-breakup.component';
import { AppMonthlyEarningsComponent } from '../../../../shared/components/dashboard1/monthly-earnings/monthly-earnings.component';
import { AppEmployeeSalaryComponent } from '../../../../shared/components/dashboard1/employee-salary/employee-salary.component';
import { AppCustomersComponent } from '../../../../shared/components/dashboard1/customers/customers.component';
import { AppProductsComponent } from '../../../../shared/components/dashboard2/products/products.component';
import { AppSocialCardComponent } from '../../../../shared/components/dashboard1/social-card/social-card.component';
import { AppSellingProductComponent } from '../../../../shared/components/dashboard1/selling-product/selling-product.component';
import { AppWeeklyStatsComponent } from '../../../../shared/components/dashboard1/weekly-stats/weekly-stats.component';
import { AppTopProjectsComponent } from '../../../../shared/components/dashboard1/top-projects/top-projects.component';
import { AppProjectsComponent } from '../../../../shared/components/dashboard1/projects/projects.component';

@Component({
  selector: 'wca-seinse-dashboard-page',
  standalone: true,
  imports: [
    TablerIconsModule,
    AppTopCardsComponent,
    AppRevenueUpdatesComponent,
    AppYearlyBreakupComponent,
    AppMonthlyEarningsComponent,
    AppEmployeeSalaryComponent,
    AppCustomersComponent,
    AppProductsComponent,
    AppSocialCardComponent,
    AppSellingProductComponent,
    AppWeeklyStatsComponent,
    AppTopProjectsComponent,
    AppProjectsComponent
  ],
  templateUrl: './seinse-page.component.html',
})
export class SeinsePageComponent {

}
