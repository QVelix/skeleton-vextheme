import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList;

  constructor(private dashboardService: DashboardService) {
    this.productList = this.dashboardService.getProductsList();
   }

  ngOnInit(): void {
  }

}
