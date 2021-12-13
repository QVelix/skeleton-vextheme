import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Accounting } from './Classes/accounting';
import { ESignature } from './Classes/electronic_signatures';
import { Products } from './Classes/products';

@Injectable({
  providedIn: 'root'
})

export class ProductGetterService {
  getElectronicSignatures(){
    return this.http.get<ESignature>('/assets/Moskow/electronic_signatures.json');
  }
  getAccouting(){
    return this.http.get<Accounting>('/assets/Moskow/accounting.json');
  }
  constructor(private http:HttpClient) { }
}
