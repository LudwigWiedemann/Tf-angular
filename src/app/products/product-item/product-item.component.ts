import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../shared/product.model";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Output() deleteProductItem = new EventEmitter<Product>();
  @Input() productItem: Product;
  @Input() editProducts: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteItem(deletedProduct){
    this.deleteProductItem.emit(deletedProduct);
  }

}
