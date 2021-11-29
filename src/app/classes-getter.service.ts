import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classes } from './Classes/classes';

@Injectable({
  providedIn: 'root'
})
export class ClassesGetterService {
  GetClasses(){
    return this.http.get<Classes>('./assets/links.json');
  }

  constructor(private http:HttpClient) { }
}
