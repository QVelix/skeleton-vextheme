import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'vex-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  classID;
  classList;
  products;

  constructor(private resolver: ComponentFactoryResolver ,private route: ActivatedRoute, private productService: ProductsService) {
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
    /*if(this.products!=null) {console.log("All OK");}
    else{console.log("Not OK");}*/
  }
}
