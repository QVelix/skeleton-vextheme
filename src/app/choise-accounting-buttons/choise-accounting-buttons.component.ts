import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ButtonGetterService } from '../Services/button-getter.service';

@Component({
  selector: 'vex-choise-accounting-buttons',
  templateUrl: './choise-accounting-buttons.component.html',
  styleUrls: ['./choise-accounting-buttons.component.scss']
})
export class ChoiseAccountingButtonsComponent implements OnInit {
  @Input() productsList;
  buttons:any[]=[];
  some(){
    console.log(this.buttons);
  }
  some2(text){
    console.log(text);
  }

  constructor(private buttonsGetter:ButtonGetterService) {
    buttonsGetter.getButton().subscribe(data=>{
      this.buttons.push(data);
    });
   }

  ngOnInit(): void {
  }

}
