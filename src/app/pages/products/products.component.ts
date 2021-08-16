import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'vex-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  classID: any;
  products: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    this.route.paramMap.subscribe(params=>{
      this.classID = params.get('class.id');
    })
    this.products = this.productService.GetList(this.classID);
   }

  ngOnInit(): void {
  }

}
