import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/dashboard.service';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  productList;

  transition()
  {
    //let link = this.productList.forEach(element => {
      //if(element.id == id) return element.name;
    //});
    window.open("https://google.com", '_self');
  }

  constructor(private dashboardService: DashboardService) {
    this.productList = this.dashboardService.getProductsList();
   }

  ngOnInit(): void {
  }

}
