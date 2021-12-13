import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ElementModel } from 'src/model/element.model';
import { Order } from 'src/model/order.model';
import { OrderState } from 'src/model/orderState.enum';
import { Project } from 'src/model/project.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  element1 = new ElementModel("id1", "SAP123", "Siemens", "art123", "ord123", OrderState.NOWY, "opis asd",0, 8, "nazwaUrz");
  element2 = new ElementModel("id2", "SAP1212", "Siemens", "art123", "ord123adsad", OrderState.ZREALIZOWANY, "opis asd",3, 3, "nazwaUrz");
  element3 = new ElementModel("id3", "SAP123asad", "Pepperl and Fuchs", "art1asdasd23", "ord123", OrderState.NOWY, "opis asd",0, 3,"nazwaUrz");
  element4 = new ElementModel("id4", "SAP123123", "Siemens", "art123", "ord1asd23", OrderState.NIEDOKOŃCZONY, "opis asd",0, 3, "nazwaUrz");
  element5 = new ElementModel("id5", "SAP12as3", "Siemens", "art123", "ord112323", OrderState.ZREALIZOWANY, "opis asasdasasdasdaasdasddasd",3, 3,"nazwaUrz");
  element6 = new ElementModel("id6", "SAP1asd23", "Siemens", "art123", "ord112323", OrderState.NIEDOKOŃCZONY, "opis asd",0, 3, "nazwaUrz");
  element7 = new ElementModel("id7", "SAP1as2d23", "Siemens", "art123", "ord112323", OrderState.ZREALIZOWANY, "opis asd",5, 5, "KABLE");
  element8 = new ElementModel("id8", "SAP1aasdsd23", "DELL", "art123", "ord112323", OrderState.ZREALIZOWANY, "opis asd",20, 20, "KABLE");
  element9 = new ElementModel("id9", "SAP1asasdd23", "Siemens", "art123", "ord112323", OrderState.ZREALIZOWANY, "opis asd",2, 2, "KABLE");

  elementsArray1:Array<ElementModel> = [this.element1, this.element2, this.element3, this.element4, this.element5, this.element6];
  elementsArray2:Array<ElementModel> = [this.element6, this.element5, this.element1, this.element3];
  elementsArray3:Array<ElementModel> = [this.element7, this.element8, this.element9];

  order1 = new Order("id123",123, this.elementsArray1, OrderState.NOWY, 5, new Date(2021,10,15), new Date(2021, 10, 16), new Date(2021, 10, 30), "BMW123", "PId123", true);
  order2 = new Order("id222",12312, this.elementsArray2, OrderState.NIEDOKOŃCZONY, 2, new Date(), new Date(), new Date(), "FORD123", "PId123", true);
  order3 = new Order("id33",123, this.elementsArray2, OrderState.NOWY, 2, new Date(2021, 12, 1), new Date(2021, 12, 2), new Date(2021, 12, 31), "DACIA", "PId123", true);
  order4 = new Order("id44",12, this.elementsArray3, OrderState.ZREALIZOWANY, 100, new Date(2021, 12, 1), new Date(2021, 12, 2), new Date(2021, 12, 31), "DACIA", "PId123", true);
  ordersArray1:Array<Order> = [this.order1, this.order2, this.order3];
  ordersArray2:Array<Order> = [this.order2, this.order4];
  allOrders:Array<Order> = [this.order1, this.order2, this.order3, this.order4];
  project = new Project("id123", "BMW 123", "DeviceName", this.ordersArray1);

  constructor() { }

  getProject() {
    return this.project;
  }

  getAllOrders() {
    return this.allOrders;
  }

  getUnfinished():Array<Order> {
    let unfinished = new Array<Order>();
    for(let i=0; i<this.allOrders.length; i++) {
      if(this.allOrders[i]._status == OrderState.NIEDOKOŃCZONY)
        unfinished.push(this.allOrders[i]);
    }
    return unfinished;
  }

  getNewOrders():Array<Order> {
    let newOrders = new Array<Order>();
    for(let i=0; i<this.allOrders.length; i++) {
      if(this.allOrders[i]._status == OrderState.NOWY)
      newOrders.push(this.allOrders[i]);
    }
    return newOrders;
  }

  getFinishedOrders():Array<Order> {
    let finished = new Array<Order>();
    for(let i=0; i<this.allOrders.length; i++) {
      if(this.allOrders[i]._status == OrderState.ZREALIZOWANY)
      finished.push(this.allOrders[i]);
    }
    return finished;
  }

  getOrderById(id:string):Order {
    console.log("getting order by id: " + id);
    for(let i = 0; i<this.allOrders.length; i++) {
      let tempOrder = this.allOrders[i];
      if(tempOrder._id == id)
        return this.allOrders[i];
    }
    return new Order("",0, new Array<ElementModel>(), OrderState.NOWY, 5, new Date(2021,10,15), new Date(2021, 10, 16), new Date(2021, 10, 30), "0", "0", true);;
  }

  saveVirtaulOrder() {
    console.log("Calling backend to save Virtual order")
  }
}
