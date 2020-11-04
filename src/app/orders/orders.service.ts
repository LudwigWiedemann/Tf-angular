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
    for(let i = 0; i< this.orders.length; i++){
      if(orderToAddTo.name === this.orders[i].name){
        this.orders[i].products.push(itemToAdd);
      }
    }
  }

  deleteOrder(i: number){
    this.orders.splice(i,1);
  }

  removeItem(produktItem: Product, orderToEdit: Order) {
    for(let i = 0; i< this.orders.length; i++){
      if(orderToEdit.name === this.orders[i].name){
        for(let x = 0; x < this.orders[i].products.length; x++) {
          if (produktItem === this.orders[i].products[x]) {
            this.orders[i].products.splice(x,1);
          }
        }
      }
    }
  }
}
