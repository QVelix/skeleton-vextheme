import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { Accounting } from './Classes/accounting';
import { ESignature } from './Classes/electronic_signatures';
import { Products } from './Classes/products';

@Injectable({
  providedIn: 'root'
})

export class ProductGetterService {
  getElectronicSignatures(){
    return this.http.get<ESignature>('/apps/taxcom/assets/cities/altayskiy_kray/electronic_signatures.json');
  }
  getAccouting():Observable<any>{
    return this.http.get('/apps/taxcom/assets/cities/altayskiy_kray/accounting.json').pipe(
      switchMap(json=>{
        console.log(json);
        let formData: FormData = new FormData;
        formData.append('json', JSON.stringify(json));
        // return this.http.post('http://api/api.php', formData).pipe(switchMap(data=>{console.log(JSON.stringify(data));return s = data;}));
        return this.http.post('/apps/taxcom/api/api.php', formData);
      })
    );
  }

  constructor(private http:HttpClient) { }
}
