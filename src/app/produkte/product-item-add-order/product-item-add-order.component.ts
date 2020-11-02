import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../shared/product.model";
import {ProdukteService} from "../produkte.service";

@Component({
  selector: 'app-product-item-add-order',
  templateUrl: './product-item-add-order.component.html',
  styleUrls: ['./product-item-add-order.component.css']
})
export class ProductItemAddOrderComponent implements OnInit {
  @Output() deleteProductItem = new EventEmitter<Product>();
  @Input() produktItem: Product;
  show:string;
  constructor() {
  }

  ngOnInit(): void {

  }
  onDeleteItem(deletedProduct){
    this.deleteProductItem.emit(deletedProduct);
  }
}
