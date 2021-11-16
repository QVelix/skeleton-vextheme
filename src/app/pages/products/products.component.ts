import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';
import { Location } from '@angular/common';

@Component({
  selector: 'vex-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  classID;
  classList;
  products;
  viewProducts:[];
  clickCount = 0;
  showPurchase = false;
  link;
  isArray($scope){
    return Array.isArray($scope);
  }
  goBack(){
    this.location.back();
  }
  showSome(info){
    if(this.clickCount==0){
      info.show = false;
      this.clickCount=1;
    }
    else if(this.clickCount>=1){
      info.show = true;
      this.clickCount=0;
    }
  }
  Purchase(link){
    this.link = link;
    this.showPurchase = true;
  }
  constructor(private resolver: ComponentFactoryResolver ,private route: ActivatedRoute, private productService: ProductsService, private location: Location) {
    this.route.paramMap.subscribe(params=>{
      this.classID = params.get('class.id');
    });
    this.products = this.productService.GetList(this.classID).subscribe(
      (data) => {
        this.classList = data;
        this.classList.forEach((element) => {
          if (element.id == this.classID) {
            this.products = element.services;
          }
        });
      });
  }
  ngOnInit() {
    // this.products.forEach(element => {
    //   if(element.view==true){
    //     this.viewProducts = element;
    //   }
    // });
    /*if(this.products!=null) {console.log("All OK");}
    else{console.log("Not OK");}*/
  }
}
