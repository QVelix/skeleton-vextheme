import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductGetterService {
  getProductsList(){
    return this.http.get
    <{Href: string, Text: string, Price: number, Group: string, BussinesType: string, TariffPeriod: string}>
    ('/assets/products.json');
  }

  constructor(private http:HttpClient) { }
}
