import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../shared/product.model";
import {Order} from "../../shared/order.model";
import {OrdersService} from "../../orders/orders.service";

@Component({
  selector: 'app-product-item-order-details',
  templateUrl: './product-item-order-details.component.html',
  styleUrls: ['./product-item-order-details.component.css']
})
export class ProductItemOrderDetailsComponent implements OnInit {
  @Output() deleteProductItem = new EventEmitter<Product>();
  @Input() productItem: Product;
  @Input() editOrder: boolean;
  @Input() orderToEdit: Order;

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
  }
  onDeleteItem(){
    this.ordersService.removeItem(this.productItem, this.orderToEdit);
  }
}
