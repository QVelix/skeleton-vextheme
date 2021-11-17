import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})

export class ProductGetterService {
  getProductsList(){
    return this.http.get<Products[]>('/assets/products.json');
  }
  constructor(private http:HttpClient) { }
}
