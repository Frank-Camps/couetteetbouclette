import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrdersNavigationComponent } from './orders-navigation/orders-navigation.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbSelectModule, NbTreeGridModule } from '@nebular/theme';
import { OrderFormComponent } from './order-form/order-form.component';



@NgModule({
  declarations: [OrdersComponent, OrdersNavigationComponent, OrderFormComponent],
  imports: [
    CommonModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbTreeGridModule,
  ]
})
export class OrdersModule { }
