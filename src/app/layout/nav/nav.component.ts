import { Component, Renderer2, OnInit  } from '@angular/core';

declare function navBehavior():void ;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {
    navBehavior();
   }

  ngOnInit(): void {
  }

}
