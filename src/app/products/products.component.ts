import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ESignature } from '../Classes/electronic_signatures';
import { ProductGetterService } from '../product-getter.service';

@Component({
  selector: 'vex-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  servicesType:string;
  productsList=null;
  classList;
  goBack(){
    this.location.back();
  }
  openLink(link){
    window.open(link);
  }

  constructor(private http: HttpClient,private resolver: ComponentFactoryResolver, private route: ActivatedRoute, private productGetter: ProductGetterService, private location: Location) {
    this.route.paramMap.subscribe(params=>{
      let service = params.get('class.link');
      if(service=='accounting'){
        this.servicesType='Отчётность';
        productGetter.getAccouting().subscribe(data=>{return this.productsList=data;});
      }
      else if(service=='electronic_signatures'){
        this.servicesType="Электронная подпись";
        productGetter.getElectronicSignatures().subscribe(
          (data) => {
            this.productsList = data;
          }
        );
      }
    });
   }

  ngOnInit(): void {
  }

}
