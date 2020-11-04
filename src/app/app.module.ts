import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { OrderComponent } from './orders/order/order.component';
import { OrderDetailsComponent } from './orders/order/order-details/order-details.component';
import { ProductItemAddOrderComponent } from './products/product-item-add-order/product-item-add-order.component';
import { ProductItemOrderDetailsComponent } from './products/product-item-order-details/product-item-order-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OrdersComponent,
    ProductsComponent,
    ProductItemComponent,
    OrderComponent,
    OrderDetailsComponent,
    ProductItemAddOrderComponent,
    ProductItemOrderDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
