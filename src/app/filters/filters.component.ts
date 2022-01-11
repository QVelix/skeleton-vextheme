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
  nameAcBtns=[L1_B1=>'ИП', L1_B2=>'ЮЛ',L1_B3=>'Группа компаний', L1_B4=>'Бюджетное учреждение',L1_B5=>'Налоговый представитель',
    L2_B1=>'Онлайн', L2_B2=>'Локальный комплекс',L2_B3=>'Решение, встроенное в 1С',
    L3_B1=> 'УСН, ПСН, ЕСН', L3_B2=> 'ОСНО',L3_B3=> 'Нулевая отчётность'];
  selectedType;
  typeAccounting;

  selectType(type: string){
    this.selectedType=type;
    console.log(this.selectedType);
  }
  log(info){
    //console.log(info);
  }
  filterLoadEv(keyL2,keyL1){
    //console.log(keyL2, keyL1);
    let text:any;
    Object.keys(this.nameAcBtns).forEach((key)=>{
        if(keyL2==key){text = this.nameAcBtns[key];
      }
    });
    console.log(text);
    document.querySelector('.'+keyL1+' > div > .'+keyL2).textContent = text;
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
