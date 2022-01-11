import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FiltersGetterService{
    getAFilter(){
        return this.http.get('/assets/cities/altayskiy_kray/accouting_buttons.json');
    }

    constructor(private http: HttpClient) {}
}