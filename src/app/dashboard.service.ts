import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getProductsList() {
    return this.http.get('/assets/products.json');
  }

  constructor(private http: HttpClient) { }
}
