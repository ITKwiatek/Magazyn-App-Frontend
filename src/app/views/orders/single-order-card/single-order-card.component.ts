import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/model/order.model';
import { OrderState } from 'src/model/orderState.enum';

declare function dropdownActivate():void ;

@Component({
  selector: 'app-single-order-card',
  templateUrl: './single-order-card.component.html',
  styleUrls: ['./single-order-card.component.css']
})
export class SingleOrderCardComponent implements OnInit {

  @Input()
  order:any;
  constructor() { 
  }

  ngOnInit(): void {
    dropdownActivate();
  }

  getState() {
    return OrderState[this.order._status];
  }

  getCountOfAllElements() {
    return this.order._elements.length;
  }

  getCurrentDate() {
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    return date;
  }

  isTodayOrLess(date:Date) {
    var today = new Date();
    var currentYear = today.getFullYear();
    var checkingYear = date.getFullYear();
    if(currentYear >= checkingYear) {
      var currentMonth = today.getMonth();
      var checkingMonth = date.getMonth();
      if(currentMonth >= checkingMonth) {
        var currentDay = today.getDay()
        var checkingDay = date.getDay();
        if(currentDay >= checkingDay) {
          return true;
        }
      }
    }
    return false; 
  }

  getCountOfFinishedElements() {
    let count = 0;
    if(this.getCountOfAllElements() > 0) {
      for(var i=0; i<this.getCountOfAllElements(); i++) {
        if(this.order._elements[i]._state == 2) {
          count ++;
        }
      }      
    } else {
      return 0;
    }
    return count;
  }

}
