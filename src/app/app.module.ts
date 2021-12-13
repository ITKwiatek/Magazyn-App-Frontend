import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NavComponent } from './layout/nav/nav.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';
import { ProjectCardComponent } from './views/projects-view/project-card/project-card.component';
import { DatePipe } from '@angular/common';
import { OrderComponent } from './views/order/order.component';
import { OrderFilterService } from './service/order-filter.service';
import { SharedService } from './service/shared.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { SingleOrderCardComponent } from './views/orders/single-order-card/single-order-card.component';
import { MergeOrdersButtonComponent } from './components/buttons/virtual-order-button-set/merge-orders-dropdown-button/merge-orders-dropdown-button.component';
import { OrderTableFilterButtonComponent } from './components/buttons/order-table-filter-button/order-table-filter-button.component';
import { MergeThisOrderButtonComponent } from './components/buttons/merge-this-order-button/merge-this-order-button.component';
import { SearchOrderInputComponent } from './components/search-order-input/search-order-input.component';
import { UnfinishedOrdersViewComponent } from './views/orders/unfinished-orders-view/unfinished-orders-view.component';
import { VirtualOrderNameModalComponent } from './components/modals/virtual-order-name-modal/virtual-order-name-modal.component';
import { EditThisOrderButtonComponent } from './components/buttons/virtual-order-button-set/edit-this-order-button/edit-this-order-button.component';
import { SaveThisOrderButtonComponent } from './components/buttons/virtual-order-button-set/save-this-order-button/save-this-order-button.component';
import { CancelThisOrderButtonComponent } from './components/buttons/virtual-order-button-set/cancel-this-order-button/cancel-this-order-button.component';
import { VirtualOrderButtonSetComponent } from './components/buttons/virtual-order-button-set/virtual-order-button-set.component';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { ExcelInputComponent } from './views/admin-view/excel-input/excel-input.component';
import { FinishedOrdersComponent } from './views/orders/finished-orders-view/finished-orders-view.component';
import { NewOrdersViewComponent } from './views/orders/new-orders-view/new-orders-view.component';
import { AllOrdersViewComponent } from './views/orders/all-orders-view/all-orders-view.component';
import { OrdersSectionComponent } from './views/orders/orders-section/orders-section.component';
import { VirtualOrdersViewComponent } from './views/virtual-orders-view/virtual-orders-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NavComponent,
    ProjectsViewComponent,
    ProjectCardComponent,
    OrderComponent,
    SingleOrderCardComponent,
    MergeOrdersButtonComponent,
    MergeThisOrderButtonComponent,
    OrderTableFilterButtonComponent,
    SearchOrderInputComponent,
    UnfinishedOrdersViewComponent,
    VirtualOrderNameModalComponent,
    EditThisOrderButtonComponent,
    SaveThisOrderButtonComponent,
    CancelThisOrderButtonComponent,
    VirtualOrderButtonSetComponent,
    AdminViewComponent,
    ExcelInputComponent,
    FinishedOrdersComponent,
    NewOrdersViewComponent,
    AllOrdersViewComponent,
    OrdersSectionComponent,
    VirtualOrdersViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    DatePipe,
    SharedService,
    OrderFilterService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
