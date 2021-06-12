import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'transaction-manager',
    loadChildren: () => import('./pages/transaction-manager/transaction-manager.module').then(m => m.TransactionManagernModule)
  },
  {
    path: 'account-manager',
    loadChildren: () => import('./pages/account-manager/account-manager.module').then(m => m.AccountManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
