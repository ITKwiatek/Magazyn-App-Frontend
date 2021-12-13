import { Component, NgModule} from '@angular/core';
import { LayoutComponent } from './layout/layout.component';

declare function toastOnReload():void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(){
    toastOnReload();
  }
  
  title = 'Zarządzaj magazynem';
}
