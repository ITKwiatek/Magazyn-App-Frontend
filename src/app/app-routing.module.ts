import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewComponent } from './views/admin-view/admin-view.component';
import { FinishedOrdersComponent } from './views/orders/finished-orders-view/finished-orders-view.component';
import { NewOrdersViewComponent } from './views/orders/new-orders-view/new-orders-view.component';
import { OrderComponent } from './views/order/order.component';
import { ProjectsViewComponent } from './views/projects-view/projects-view.component';
import { UnfinishedOrdersViewComponent } from './views/orders/unfinished-orders-view/unfinished-orders-view.component';
import { AllOrdersViewComponent } from './views/orders/all-orders-view/all-orders-view.component';
import { VirtualOrdersViewComponent } from './views/virtual-orders-view/virtual-orders-view.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsViewComponent},
  { path: 'order/:id', component: OrderComponent},
  { path: 'orders', component: AllOrdersViewComponent},
  { path: 'unfinished', component: UnfinishedOrdersViewComponent},
  { path: 'finished', component: FinishedOrdersComponent},
  { path: 'new', component:NewOrdersViewComponent},
  { path: 'admin', component: AdminViewComponent},
  { path: 'virtual', component: VirtualOrdersViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
