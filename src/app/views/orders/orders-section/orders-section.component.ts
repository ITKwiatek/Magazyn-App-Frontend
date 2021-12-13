import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/model/order.model';

@Component({
  selector: 'app-orders-section',
  templateUrl: './orders-section.component.html',
  styleUrls: ['./orders-section.component.css']
})
export class OrdersSectionComponent implements OnInit {

  @Input()
  orders: Array<Order>;
  totalRecords:number;
  page: number = 1;

  constructor() { 
  }

  ngOnInit(): void {
    this.totalRecords = this.orders.length;
  }

}
