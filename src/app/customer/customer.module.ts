import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CustomerNavbarComponent } from './customer-navbar/customer-navbar.component';
import { CustomerEmployeeComponent } from './customer-employee/customer-employee.component';
import { CustomerCreateEmployeeComponent } from './customer-create-employee/customer-create-employee.component';
import { ClientAuthGuard } from '../AuthGuard/ClientAuthGuard';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerNavbarComponent,
    CustomerEmployeeComponent,
    CustomerCreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  providers: [
    ClientAuthGuard,
  ],
})
export class CustomerModule { }
