import { Component, OnInit } from '@angular/core';
import { VirtualOrderService } from 'src/app/service/virtual-order.service';

@Component({
  selector: 'app-virtual-order-button-set',
  templateUrl: './virtual-order-button-set.component.html',
  styleUrls: ['./virtual-order-button-set.component.css']
})
export class VirtualOrderButtonSetComponent implements OnInit {

  constructor(private virtualOrderService:VirtualOrderService) { }

  ngOnInit(): void {
  }

  isMergeMode():boolean {
    return this.virtualOrderService.isChangeMode();
  }

}
