import { Component, Input, OnInit } from '@angular/core';
import { VirtualOrderService } from 'src/app/service/virtual-order.service';
import { Order } from 'src/model/order.model';

@Component({
  selector: 'app-merge-this-order-button',
  templateUrl: './merge-this-order-button.component.html',
  styleUrls: ['./merge-this-order-button.component.css']
})
export class MergeThisOrderButtonComponent implements OnInit {
  
  @Input()
  order:any;

  clicked: boolean = false;

  constructor(private virtualOrderService: VirtualOrderService) {
    localStorage.setItem('mergeMode', 'false');
   }

  ngOnInit(): void {
  }

  isMerging():boolean {
    return this.virtualOrderService.isChangeMode();
  }

  isShow(): boolean {
    if(this.isMerging() && !this.clicked)
      return true;
    return false;
  }

  addAndHide() {
    this.virtualOrderService.addOrder(this.order);
    this.clicked = true;
  }

}
