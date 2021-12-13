import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrderState } from 'src/model/orderState.enum';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  order: any;
  constructor(public datepipe: DatePipe){}

  ngOnInit(): void {
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

  getCountOfNewElements() {
    let count = 0;
    if(this.getCountOfAllElements() > 0) {
      for(var i=0; i<this.getCountOfAllElements(); i++) {
        if(this.order._elements[i]._state == 0) {
          count ++;
        }
      }      
    } else {
      return 0;
    }
    return count;
  }

}
