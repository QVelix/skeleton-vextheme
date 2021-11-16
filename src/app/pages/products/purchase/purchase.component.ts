import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vex-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {
  @Input() link;
  constructor() { }

  ngOnInit(): void {
  }

}
