import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ButtonGetterService {

  getButton(){
    return this.http.get('./assets/cities/altayskiy_kray/accouting_buttons.json').pipe(
      switchMap(buttons=>{
        console.log(buttons);
        let formData: FormData = new FormData;
        formData.append('buttons', JSON.stringify(buttons));
        // return this.http.post('http://api/api.php', formData).pipe(switchMap(data=>{console.log(JSON.stringify(data));return s = data;}));
        return this.http.post('http://api/api.php', formData);
      })
    );
    //return this.http.get('./assets/cities/altayskiy_kray/accouting_buttons.json').pipe((data)=>{return data});
  }

  constructor(private http:HttpClient) { }
}
