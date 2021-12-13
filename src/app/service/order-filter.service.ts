import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderFilterService {

  constructor() { }

  changeFilterValue(filterId: string) {

    if(localStorage.getItem(filterId) == '1') {
      console.log("Changing " +filterId + " value to: false..." )
      localStorage.setItem(filterId, '0');
    } else {
      console.log("Changing " +filterId + " value to: true..." )
      localStorage.setItem(filterId, '1');
    }
  }

  getFilterValueFromLS(filterId : string) {
    if(localStorage.getItem(filterId) == '1')
      return true;
    return false;
  }

}
