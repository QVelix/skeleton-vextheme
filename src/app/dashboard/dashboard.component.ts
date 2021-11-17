import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  classList = [
    {'name': 'Отчётность', 'link':'accounting', 'image_path': '/icon_otch.svg'},
    {'name':'Электронная подпись', 'link': 'electronic_signature', 'image_path': '/icon_uc.svg'}
  ];
  constructor() {
  }

  ngOnInit(): void {
  }

}
