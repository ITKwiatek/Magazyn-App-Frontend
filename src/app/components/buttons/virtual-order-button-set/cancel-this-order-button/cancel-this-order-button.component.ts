import { Component, OnInit } from '@angular/core';
import { VirtualOrderService } from 'src/app/service/virtual-order.service';

@Component({
  selector: 'app-cancel-this-order-button',
  templateUrl: './cancel-this-order-button.component.html',
  styleUrls: ['./cancel-this-order-button.component.css']
})
export class CancelThisOrderButtonComponent implements OnInit {

  constructor(private virtualOrderService: VirtualOrderService) { }

  ngOnInit(): void {
  }

  cancelOrder() {
    localStorage.setItem("toast_on_reload_color", "red darken-4")
    localStorage.setItem("toast_on_reload_message", "Anulowano Wirtualne Zamówienie");
    this.virtualOrderService.turnOffMergeMode();
    window.location.reload();
  }

}
