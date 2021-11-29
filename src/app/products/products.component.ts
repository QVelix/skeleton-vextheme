import { Location } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductGetterService } from '../product-getter.service';
import { Products } from '../Classes/products';

@Component({
  selector: 'vex-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  servicesType:string;
  productsList = [];
  classList:Products[];
  goBack(){
    this.location.back();
  }

  constructor(private resolver: ComponentFactoryResolver, private route: ActivatedRoute, private productGetter: ProductGetterService, private location: Location) {
    this.route.paramMap.subscribe(params=>{
      let service = params.get('class.link');
      if(service=='/otchetnost/'){
        this.servicesType='Отчётность';
      }
      else if(service=='/centr/all/'){
        this.servicesType='Электронные подписи';
      }
    });
   }

  ngOnInit(): void {
  }

}
