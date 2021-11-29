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
    this.classList = classesGetter.GetClasses().subscribe(
      (data) => {
        this.classList=data;
      }
    );
  }

  ngOnInit(): void {
  }

}
