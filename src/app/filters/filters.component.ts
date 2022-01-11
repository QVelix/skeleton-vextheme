import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiltersGetterService } from '../Services/filters-getter.service';

@Component({
  selector: 'vex-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  serviceType:string;
  typeElSignatures=["ЭЛЕКТРОННЫЕ ТОРГИ", "ГОСУСЛУГИ И ОТЧЁТНОСТЬ", "СИСТЕМЫ ЭДО", "ФИЗИЧЕСКИМ ЛИЦАМ", "ПОПУЛЯРНОЕ"];
  selectedType;
  typeAccounting;

  selectType(type: string){
    this.selectedType=type;
    console.log(this.selectedType);
  }
  log(info){
    console.log(info);
  }

  constructor(private route: ActivatedRoute, private filterGetter: FiltersGetterService) {
    this.route.paramMap.subscribe(params=>{
      if (params.get('class.link') == 'accounting'){
        this.serviceType = "Отчётность";
        filterGetter.getAFilter().subscribe((data:any[])=>{this.typeAccounting=data});
      }
      if (params.get('class.link') == 'electronic_signatures'){
        this.serviceType = "Электронная подпись";
      }
    });

   }

  ngOnInit(): void {
  }

}
