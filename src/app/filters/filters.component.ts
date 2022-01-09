import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vex-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  serviceType:string;
  typeElSignatures=["ЭЛЕКТРОННЫЕ ТОРГИ", "ГОСУСЛУГИ И ОТЧЁТНОСТЬ", "СИСТЕМЫ ЭДО", "ФИЗИЧЕСКИМ ЛИЦАМ", "ПОПУЛЯРНОЕ"];
  selectedType;

  selectType(type: string){
    this.selectedType=type;
    console.log(this.selectedType);
  }

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params=>{
      if (params.get('class.link') == 'accounting'){
        this.serviceType = "Отчётность";
      }
      if (params.get('class.link') == 'electronic_signatures'){
        this.serviceType = "Электронная подпись";
      }
    })
   }

  ngOnInit(): void {
  }

}
