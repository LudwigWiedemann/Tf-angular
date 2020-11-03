import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../shared/product.model";
import {Bestellung} from "../../shared/bestellung.model";
import {BestellungenService} from "../../bestellungen/bestellungen.service";

@Component({
  selector: 'app-product-item-order-details',
  templateUrl: './product-item-order-details.component.html',
  styleUrls: ['./product-item-order-details.component.css']
})
export class ProductItemOrderDetailsComponent implements OnInit {
  @Output() deleteProductItem = new EventEmitter<Product>();
  @Input() produktItem: Product;
  @Input() editOrder: boolean;
  @Input() orderToEdit: Bestellung;

  constructor(private bestellungenService: BestellungenService) { }

  ngOnInit(): void {
  }
  onDeleteItem(){
    this.bestellungenService.removeItem(this.produktItem, this.orderToEdit);
  }
}
