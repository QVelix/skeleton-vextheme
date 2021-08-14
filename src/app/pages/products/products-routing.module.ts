import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { QuicklinkModule } from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, QuicklinkModule]
})
export class ProductsRoutingModule { }
