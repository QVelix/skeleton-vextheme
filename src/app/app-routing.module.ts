import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { CustomLayoutComponent } from './custom-layout/custom-layout.component';

const routes: Routes = [
  /*{
    path: '',
    component: DashboardComponent
  },*/
  {
    path: '',
    component: CustomLayoutComponent,
    children: [
      {
        path: 'dashboard',
        redirectTo: '/',
      },
      {
        path: '',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)
      },
      {
        path: 'products',
        redirectTo: 'products'
      },
      {
        path: '',
        loadChildren: () => import('./pages/products/products.module').then(m=>m.ProductsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: QuicklinkStrategy,
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule, QuicklinkModule]
})
export class AppRoutingModule {
}
