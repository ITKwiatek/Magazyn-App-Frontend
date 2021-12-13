import { Component, OnInit } from '@angular/core';
import { VirtualOrderService } from 'src/app/service/virtual-order.service';

@Component({
  selector: 'app-merge-orders-dropdown-button',
  templateUrl: './merge-orders-dropdown-button.component.html',
  styleUrls: ['./merge-orders-dropdown-button.component.css']
})
export class MergeOrdersButtonComponent implements OnInit {

  constructor(private virtualOrderService:VirtualOrderService) { }

  ngOnInit(): void {
  }
}
