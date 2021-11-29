import { Component, OnInit } from '@angular/core';
import { ClassesGetterService } from '../classes-getter.service';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  classList;
  constructor(private classesGetter:ClassesGetterService) {
    classesGetter.GetClasses().subscribe(
      (data) => {
        this.classList=data;
        this.classList.forEach(element => {
          let length;
          length = element.file_name.length;
          element.link = element.file_name.substr(0, length-5);
          return element;
        });
      }
    );
  }

  ngOnInit(): void {
  }

}
