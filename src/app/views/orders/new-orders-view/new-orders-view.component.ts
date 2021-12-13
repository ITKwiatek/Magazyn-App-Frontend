import { Component, OnInit } from '@angular/core';
import { Order } from 'src/model/order.model';
import { SharedService } from 'src/app/service/shared.service';
@Component({
  selector: 'app-new-orders-view',
  templateUrl: './new-orders-view.component.html',
  styleUrls: ['./new-orders-view.component.css']
})
export class NewOrdersViewComponent implements OnInit {

  orders: Array<Order>;
  constructor(private sharedService: SharedService) {
    this.orders = sharedService.getNewOrders();
   }

  ngOnInit(): void {
  }

}
