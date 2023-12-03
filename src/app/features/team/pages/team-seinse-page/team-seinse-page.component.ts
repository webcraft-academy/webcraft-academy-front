import { Component } from '@angular/core';
// components
import { AppWelcomeCardComponent } from '../../../../shared/components/dashboard2/welcome-card/welcome-card.component';
import { AppPaymentsComponent } from '../../../../shared/components/dashboard2/payments/payments.component';
import { AppProductsComponent } from '../../../../shared/components/dashboard2/products/products.component';
import { AppRevenueUpdatesTwoComponent } from '../../../../shared/components/dashboard2/revenue-updates/revenue-updates.component';
import { AppSalesOverviewComponent } from '../../../../shared/components/dashboard2/sales-overview/sales-overview.component';
import { AppTotalEarningsComponent } from '../../../../shared/components/dashboard2/total-earnings/total-earnings.component';
import { AppSalesProfitComponent } from '../../../../shared/components/dashboard2/sales-profit/sales-profit.component';
import { AppMonthlyEarningsTwoComponent } from '../../../../shared/components/dashboard2/monthly-earnings/monthly-earnings.component';
import { AppWeeklyStatsComponent } from '../../../../shared/components/dashboard1/weekly-stats/weekly-stats.component';
import { AppYearlySalesComponent } from '../../../../shared/components/dashboard2/yearly-sales/yearly-sales.component';
import { AppPaymentGatewaysComponent } from '../../../../shared/components/dashboard2/payment-gateways/payment-gateways.component';
import { AppRecentTransactionsComponent } from '../../../../shared/components/dashboard2/recent-transactions/recent-transactions.component';
import { AppProductPerformanceComponent } from '../../../../shared/components/dashboard2/product-performance/product-performance.component';

@Component({
  selector: 'app-team-seinse-page',
  templateUrl: './team-seinse-page.component.html',
  standalone: true,
  imports: [
    AppWelcomeCardComponent,
    AppPaymentsComponent,
    AppProductsComponent,
    AppRevenueUpdatesTwoComponent,
    AppSalesOverviewComponent,
    AppTotalEarningsComponent,
    AppSalesProfitComponent,
    AppMonthlyEarningsTwoComponent,
    AppWeeklyStatsComponent,
    AppYearlySalesComponent,
    AppPaymentGatewaysComponent,
    AppRecentTransactionsComponent,
    AppProductPerformanceComponent,
  ]
})
export class TeamSeinsePageComponent {

}
