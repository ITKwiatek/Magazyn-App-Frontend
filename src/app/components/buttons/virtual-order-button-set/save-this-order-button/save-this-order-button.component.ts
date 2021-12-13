import { Component, OnInit } from '@angular/core';
import { VirtualOrderService } from 'src/app/service/virtual-order.service';

declare var M: any;

@Component({
  selector: 'app-save-this-order-button',
  templateUrl: './save-this-order-button.component.html',
  styleUrls: ['./save-this-order-button.component.css']
})
export class SaveThisOrderButtonComponent implements OnInit {

  constructor(private virtualOrderService: VirtualOrderService) { }

  ngOnInit(): void {
  }
  
  saveOrder() {
    localStorage.setItem("toast_on_reload_message", "Zapisano Wirtualne Zamówienie");
    localStorage.setItem("toast_on_reload_color", "light-blue darken-4")
    this.virtualOrderService.saveOrder();
    window.location.reload();
  }

}
