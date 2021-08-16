import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  class: any;
  GetList(ID:any){
    this.class = this.http.get<any[]>('/assets/products.json')
    .subscribe((data)=>{
      this.class = data;
      this.class.forEach((element: any) => {
        if(element.id == ID) {
          console.log(element.services);
          return element.services;
        }
      });
    });
  }

  constructor(private http: HttpClient) { }
}
