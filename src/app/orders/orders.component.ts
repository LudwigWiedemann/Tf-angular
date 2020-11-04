import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/order.model';
import {Product} from "../shared/product.model";
import {OrdersService} from "./orders.service";
import {ProductsService} from "../products/products.service";




@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  editOrder = false;
  showProducts = false;
  products:Product[];
  orders: Order[];
  orderToEdit: Order;
  addItems: false;


  constructor(private ordersService: OrdersService,private productsService: ProductsService) { }

  ngOnInit(): void {
    this.orders = this.ordersService.getOrders();
  }

  onEditOrder() {
    this.editOrder = true;

  }

  onReturn(){
    this.addItems = false;
    console.log('add Items = false');
    console.log(this.addItems);
    this.editOrder = false;
    this.showProducts = false;

  }

  deleteAnOrder(deletedOrder: Order) {
    for(let i = 0; i < this.orders.length; i++){
      if(deletedOrder === this.orders[i]){
        this.ordersService.deleteOrder(i);
      }
    }
  }
  showAllProducts(order: Order){
    this.orderToEdit = order;
    this.products = this.productsService.getProducts();
    this.showProducts = true;

  }
}
