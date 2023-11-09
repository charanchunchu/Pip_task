import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientAuthGuard } from 'src/app/AuthGuard/ClientAuthGuard';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Dashboard', component: DashboardComponent },
  {
    path: 'Customer',
    canActivate: [ClientAuthGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)
  },
  {
    path: 'Client',
    canActivate: [ClientAuthGuard],
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
