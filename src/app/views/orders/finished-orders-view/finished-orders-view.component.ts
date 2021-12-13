import { Component, OnInit } from '@angular/core';
import { Order } from 'src/model/order.model';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-finished-orders-view',
  templateUrl: './finished-orders-view.component.html',
  styleUrls: ['./finished-orders-view.component.css']
})
export class FinishedOrdersComponent implements OnInit {
  
  orders: Array<Order>;
  constructor(private sharedService: SharedService) {
    this.orders = sharedService.getFinishedOrders();
   }

  ngOnInit(): void {
  }

}
