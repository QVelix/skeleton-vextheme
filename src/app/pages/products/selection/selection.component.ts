import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vex-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  @Input() products;
  choisedId=0;
  categoryType = [{
    'id': 0,
    'nameButtonCategory':'Формат работы',
    'buttonsType':
      [
        {'id': 0,'name':'ИП', 'show': true, 'clickCount': 0, 'showId':[
          {'id':1, 'chaild':[0,2]},{'id':2, 'chaild':[0,1,2]},{'id':3, 'chaild':[0,1,2]}
        ]},
        {'id': 1,'name':'ЮЛ', 'show': true, 'clickCount': 0, 'showId':[
          {'id':1, 'chaild':[0,1,2]},{'id':2, 'chaild':[0,1,2]},{'id':3, 'chaild':[0,1,2]}
        ]}, 
        {'id': 2,'name':'Группа компаний', 'show': true, 'clickCount': 0, 'showId':[
          {'id':1, 'chaild':[0,1,2]}
        ]}, 
        {'id': 3,'name':'Бюджетное учреждение', 'show': true, 'clickCount': 0, 'showId':[
          {'id':1, 'chaild':[0,1,2]},{'id':3, 'chaild':[0,1,2]}
        ]},
        {'id': 4,'name':'Налоговоый представитель', 'show': true, 'clickCount': 0, 'showId':[
          {'id':1, 'chaild':[0,1]}
        ]}
      ],
      'show': true,
    },
    {
      'id': 1,
      'nameButtonCategory':'Программное решение',
      'buttonsType':
      [
        {'id': 0,'name':'Онлайн', 'show': true, 'clickCount': 0, 'showId':[
          {'id':2, 'chaild':[0,1,2]},{'id':3, 'chaild':[0,1,2]}
        ]},
        {'id': 1,'name':'Программа на компьютре', 'show': true, 'clickCount': 0},
        {'id': 2,'name':'Решение встроенное в 1С', 'show': true, 'clickCount': 0}
      ],
      'show': false,
    },
    {
      'id': 2,
      'nameButtonCategory':'Налоговый режим',
      'buttonsType':
        [
          {'id': 0,'name':'УСН, ПСН, ЕСН', 'show': true, 'clickCount': 0, 'showId':[
            {'id':3, 'chaild':[0,1,2]}
          ]},
          {'id': 1,'name':'ОСНО', 'show': true, 'clickCount': 0, 'showId':[
            {'id':3, 'chaild':[0,1,2]}
          ]},
          {'id': 2,'name':'Нулевая отчётность', 'show': true, 'clickCount': 0}
        ],
      'show': false
    },
    {
    'id': 3,
    'nameButtonCategory':'Период',
    'buttonsType':
      [
        {'id': 0,'name':'1 год', 'show': true, 'clickCount': 0},
        {'id': 1,'name':'2 года', 'show': true, 'clickCount': 0},
        {'id': 2,'name':'3 года', 'show': true, 'clickCount': 0},
      ],
    'show': false
    }];
  onClick(id, buttonId){
    this.categoryType.forEach(element => {
      // element.buttonsType.forEach(elem=>{
      //   elem.showId.forEach(el=>{
      //     console.log(el.id);
      //   })
      // })
      if(element.show==true&&element.id!=id+1){
        this.destroy(id);
      }
      if(element.id==id+1&&element.show!=true) {
        element.show=true;
      }
      if(element.id==id&&element.show==true){
        element.buttonsType.forEach(elem=>{
          if(elem.id==buttonId){
            elem.clickCount=1;
            console.log('onClick', elem.name, ' ', elem.clickCount);
          }
        });
      }
    });
  }
  destroy(id){
    console.log('Вызван дестрой');
    this.categoryType.forEach(element => {
      console.log(element.id);
      if(element.id>id&&element.show!=false){
        element.show=false;
      }
      if(element.id>=id){
        element.buttonsType.forEach(elem=>{
            elem.clickCount=0;
            console.log('destroy', elem.name, ' ', elem.clickCount);
        });
      }
    });
  }
  constructor() {
  }
  ngOnInit(): void {
  }
}