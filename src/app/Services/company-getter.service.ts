import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../Classes/company';

@Injectable({
    providedIn: 'root'
})
export class ClassesGetterService {
    GetClasses() {
        let formData: FormData = new FormData;
        formData.append('json', JSON.stringify([]));
        return this.http.post('https://api/company_api.php', formData);
    }

    constructor(private http: HttpClient) { }
}