import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  @ViewChild('nameInput') nameInputRef : ElementRef;
  editOrder = false;
  showProducts = false;
  products:Product[];
  productsOfNewOrder: Product[];
  orders: Order[];
  orderToEdit: Order;
  addItems = false;
  addOrder = false;
  nameOfNewOrder = '';
  button = false;


  constructor(private ordersService: OrdersService,private productsService: ProductsService) { }

  ngOnInit(): void {
    this.orders = this.ordersService.getOrders();
    this.products = this.productsService.getProducts();
  }

  onEditOrder() {
    this.editOrder = true;

  }

  onReturn(){
    this.addItems = false;
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

  onAddOrder() {
    this.addOrder = true;
    this.showProducts = true;
    this.productsOfNewOrder = [];
    this.orderToEdit = new Order(this.nameOfNewOrder, this.productsOfNewOrder);

  }

  onAcceptName() {
    this.orderToEdit.name = this.nameOfNewOrder
    this.ordersService.addOrder(this.orderToEdit)
    this.clearInput();
    this.showProducts = false;
    this.addOrder = false;

  }

  clearInput() {
    this.nameOfNewOrder = '';
  }
}
