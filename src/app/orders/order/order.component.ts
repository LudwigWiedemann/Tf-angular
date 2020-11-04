import {Product} from "../../shared/product.model";
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Order} from "../../shared/order.model";





@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  products: Product[];
  @Output() onDeleteOrder = new EventEmitter<Order>();
  @Output() onShowProducts = new EventEmitter<Order>();
  @Output() dontShowProducts = new EventEmitter<boolean>();
  @Input() order: Order;
  @Input() editOrder: boolean;
  showDetails = false;
  @Input() addItems = false;


  constructor() {
  }

  ngOnInit(): void {
  }

  showOrderDetails() {
    this.showDetails = !this.showDetails;
  }

  deleteOrder() {
    this.onDeleteOrder.emit(this.order)
  }

  onAddProducts(order: Order){
    this.addItems = true;
    this.onShowProducts.emit(order);

  }

  accept() {
    this.addItems = false;
    this.dontShowProducts.emit(false);
  }
}

