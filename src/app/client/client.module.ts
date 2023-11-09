import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { ClientAuthGuard } from 'src/app/AuthGuard/ClientAuthGuard';


@NgModule({
  declarations: [
    ClientDashboardComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  providers: [
    ClientAuthGuard,
  ],
})
export class ClientModule { }
