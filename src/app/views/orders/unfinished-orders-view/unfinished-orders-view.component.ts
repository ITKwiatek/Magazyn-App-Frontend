import { Component, OnInit } from '@angular/core';
import { Order } from 'src/model/order.model';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-unfinished-orders-view',
  templateUrl: './unfinished-orders-view.component.html',
  styleUrls: ['./unfinished-orders-view.component.css']
})
export class UnfinishedOrdersViewComponent implements OnInit {
  orders: Array<Order>;
  constructor(private sharedService: SharedService) {
    this.orders = sharedService.getUnfinished();
   }

  ngOnInit(): void {
  }

}
