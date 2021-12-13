import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElementModel } from 'src/model/element.model';
import { Order } from 'src/model/order.model';
import { OrderState } from 'src/model/orderState.enum';
import { OrderFilterService } from '../../service/order-filter.service';
import { SharedService } from '../../service/shared.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order:Order;
  elements:Array<ElementModel>;
  stateNowy = OrderState.NOWY;
  stateNiedokonczony = OrderState.NIEDOKOŃCZONY;
  stateZrealizowany = OrderState.ZREALIZOWANY;
  tempElem = ElementModel;

  constructor(private router:ActivatedRoute, private sharedService: SharedService, private filterService: OrderFilterService) {
    let param = this.router.snapshot.params;
    console.log("Calling service for order with id: " + param.id)
    this.order = this.sharedService.getOrderById(param.id);
    this.elements = this.order._elements;
   }

  ngOnInit(): void {
  }

  getState(status:number) {
    return OrderState[status];
  }

  isNotHidden(filterId: string) : boolean {
    return this.filterService.getFilterValueFromLS(filterId);
  }

  getElemById(id: string):ElementModel {
    for(let i in this.elements) {
      if(this.elements[i]._id == id) {
        return this.elements[i];
      }
    }
    return new ElementModel("","", "", "", "", 0, "", 0, 0, "");
  }

  checkElement(elementId: string) {

    let element = this.getElemById(elementId);
    // let elemActualCount = document.getElementById('actualCount' + elementId);
    let elemCheckIcon = document.getElementById('checkButton' + elementId);
    if(element != null)
      element._actualCount = element._count;
    if(elemCheckIcon != null)
      if(elemCheckIcon.innerHTML != "check")
        elemCheckIcon.innerHTML = "check";
      else if(element._actualCount < element._count)
        elemCheckIcon.innerHTML = "crop_square";
  }
  countUp(elemId:string) {
    let actualCount = this.getElemById(elemId)._actualCount;
    let maxCount = this.getElemById(elemId)._count;
    if(actualCount < maxCount) {
      this.getElemById(elemId)._actualCount++;
      console.log("count up");
      if(this.getElemById(elemId)._actualCount >= maxCount)
        this.checkElement(elemId);
    } else {
      this.checkElement(elemId);
    }
  }

  countDown(elemId:string) {
    let actualCount = this.getElemById(elemId)._actualCount;
    if(actualCount > 0) {
      this.getElemById(elemId)._actualCount--;
      console.log("count down")
      let elemCheckIcon = document.getElementById('checkButton' + elemId);
      if(elemCheckIcon != null)
        elemCheckIcon.innerHTML = "crop_square";
    }
  }
}
