import { Location } from '@angular/common';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ESignature } from '../Classes/electronic_signatures';
import { ProductGetterService } from '../product-getter.service';

@Component({
  selector: 'vex-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  servicesType:string;
  productsList;
  classList;
  goBack(){
    this.location.back();
  }

  constructor(private resolver: ComponentFactoryResolver, private route: ActivatedRoute, private productGetter: ProductGetterService, private location: Location) {
    this.route.paramMap.subscribe(params=>{
      let service = params.get('class.link');
      if(service=='accounting'){
        this.servicesType='Отчётность';
      }
      else if(service=='electronic_signatures'){
        this.servicesType="Электронная отчётность";
        productGetter.getElectronicSignatures().subscribe(
          (data) => {
            this.productsList = data;
            this.productsList.forEach(element => {
              console.log(element);
            });
          }
        );
      }
    });
   }

  ngOnInit(): void {
  }

}
