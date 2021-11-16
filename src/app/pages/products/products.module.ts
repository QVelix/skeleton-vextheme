import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { NoSanitizePipe } from 'src/app/pages/products/sanitaizer';
import { SelectionComponent } from './selection/selection.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [ProductsComponent, NoSanitizePipe, SelectionComponent, PurchaseComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class ProductsModule { }
