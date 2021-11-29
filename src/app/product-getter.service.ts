import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ESignature } from './Classes/electronic_signatures';
import { Products } from './Classes/products';

@Injectable({
  providedIn: 'root'
})

export class ProductGetterService {
  getElectronicSignatures(){
    this.http.get<ESignature>('./assets/Москва/electronic-signatures.json');
  }
  constructor(private http:HttpClient) { }
}
