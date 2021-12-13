import { Injectable } from '@angular/core';
import { Order } from 'src/model/order.model';
import { VirtualOrderNameModalComponent } from '../components/modals/virtual-order-name-modal/virtual-order-name-modal.component';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class VirtualOrderService {

  virtualOrderName:string;
  virtualOrder:Array<Order>;

  constructor(private sharedService: SharedService) {
    this.resetNameAndList();
    this.changeMergeModeTo(false);
   }

  setName(name:string) {
    this.virtualOrderName = name;
  }

  addOrder(order:Order) {
    this.virtualOrder.push(order);
    console.log(this.virtualOrder)
  }

  changeMergeModeTo(change: boolean) {
    console.log("setting change mode to " + change);
    if(change)
      localStorage.setItem('mergeMode', 'true');
    else
      localStorage.setItem('mergeMode', 'false');
  }

  isChangeMode():boolean {
    if(localStorage.getItem('mergeMode') == 'false')
      return false;
    return true;
  }

  resetNameAndList() {
    this.virtualOrderName = "";
    this.virtualOrder = new Array<Order>();
  }

  turnOffMergeMode() {
    this.changeMergeModeTo(false);
    this.resetNameAndList();
  }

  saveOrder() {
    console.log("Saving Virtaul order...");
    this.sharedService.saveVirtaulOrder();
  }
}
