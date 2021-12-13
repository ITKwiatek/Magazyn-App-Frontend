import { Component, OnInit } from '@angular/core';
import { VirtualOrderService } from 'src/app/service/virtual-order.service';

@Component({
  selector: 'app-virtual-order-name-modal',
  templateUrl: './virtual-order-name-modal.component.html',
  styleUrls: ['./virtual-order-name-modal.component.css']
})
export class VirtualOrderNameModalComponent implements OnInit {

  constructor(private virtualOrderService:VirtualOrderService) { }

  ngOnInit(): void {
  }

  saveName(n:string) {
    console.log(n);
    this.virtualOrderService.setName(n);
  }

  changeMergeMode() {
    console.log("Changing merge mode to true...")
    this.virtualOrderService.changeMergeModeTo(true);
  }

}
