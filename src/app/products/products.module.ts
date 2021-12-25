import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ChoiseAccountingButtonsComponent } from '../choise-accounting-buttons/choise-accounting-buttons.component';


@NgModule({
  declarations: [ProductsComponent, ChoiseAccountingButtonsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
  ]
})
export class ProductsModule { }
