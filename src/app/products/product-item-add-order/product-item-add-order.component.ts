import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../shared/product.model";
import {OrdersService} from "../../orders/orders.service";
import {Order} from "../../shared/order.model";

@Component({
  selector: 'app-product-item-add-order',
  templateUrl: './product-item-add-order.component.html',
  styleUrls: ['./product-item-add-order.component.css']
})
export class ProductItemAddOrderComponent implements OnInit {
  @Input() productItem: Product;
  @Input() orderToEdit: Order;
  show:string;
  constructor(private ordersService: OrdersService) {
  }

  ngOnInit(): void {

  }

  addProductToOrder(){
    this.ordersService.addItemToOrder(this.productItem, this.orderToEdit);
  }

}
