import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path : 'practitions',
        loadChildren: () => import('../practitions/practitions.module').then(m => m.PractitionsModule)
      },
      {
        path : 'health',
        loadChildren: () => import('../health/health.module').then(m => m.HealthModule)
      },
      {
        path : 'family',
        loadChildren: () => import('../family/family.module').then(m => m.FamilyModule)
      },
      {
        path : 'tips',
        loadChildren: () => import('../tips/tips.module').then(m => m.TipsModule)
      },
      {
        path : 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
