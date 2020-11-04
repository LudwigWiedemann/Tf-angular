import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import {Order} from "../shared/order.model";

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor() { }
  pr:Product[]=[new Product('hallo','description'),new Product('name','ad')]
  pl:Product[]=[new Product('hallo','description'),new Product('name','ad')]

  orders:Order[]=[
    new Order('meineBestellung', this.pr),
    new Order('deineBestellung', this.pl),
  ];

  getOrders(){
  return this.orders
  }

  addItemToOrder(itemToAdd: Product, orderToAddTo: Order){
    orderToAddTo.products.push(itemToAdd);
  }

  deleteOrder(i: number){
    this.orders.splice(i,1);
  }

  removeItem(produktItem: Product, orderToEdit: Order) {
    for(let x = 0; x < orderToEdit.products.length; x++) {
      if (produktItem === orderToEdit.products[x]) {
            orderToEdit.products.splice(x,1);
      }
    }
  }



  addOrder(newOrder){
    this.orders.push(newOrder);
  }
}
