import { Component, OnInit } from '@angular/core';
import { OrderFilterService } from 'src/app/service/order-filter.service';

declare function dropdownActivate():void ;

@Component({
  selector: 'app-order-table-filter-button',
  templateUrl: './order-table-filter-button.component.html',
  styleUrls: ['./order-table-filter-button.component.css']
})
export class OrderTableFilterButtonComponent implements OnInit {

  constructor(private filterService: OrderFilterService) { }

  ngOnInit(): void {
    dropdownActivate();
  }

  filterClicked(filterId: string) {
    this.filterService.changeFilterValue(filterId);
  }

  isNotHidden(filterId: string) : boolean {
    return this.filterService.getFilterValueFromLS(filterId);
  }

}
