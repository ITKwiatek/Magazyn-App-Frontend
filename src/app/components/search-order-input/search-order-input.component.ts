import { Component, OnInit } from '@angular/core';

declare function searchOrder():void;

@Component({
  selector: 'app-search-order-input',
  templateUrl: './search-order-input.component.html',
  styleUrls: ['./search-order-input.component.css']
})
export class SearchOrderInputComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

  searchOrder() {
    this.searchOrder();
  }

}
