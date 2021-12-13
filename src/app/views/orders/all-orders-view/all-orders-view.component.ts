import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Order } from 'src/model/order.model';


@Component({
  selector: 'app-all-orders-view',
  templateUrl: './all-orders-view.component.html',
  styleUrls: ['./all-orders-view.component.css']
})
export class AllOrdersViewComponent implements OnInit {

  orders: Array<Order>;
  constructor(private sharedService: SharedService) {
    this.orders = sharedService.getAllOrders();
   }

  ngOnInit(): void {
  }

}
