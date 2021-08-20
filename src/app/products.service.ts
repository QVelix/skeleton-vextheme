import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  class;
  product;
  GetList(ID:any):any{
    return this.http.get('/assets/products.json');
  }

  constructor(private http: HttpClient) { }
}
