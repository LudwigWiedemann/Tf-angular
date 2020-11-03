import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product} from "../../shared/product.model";
import {BestellungenService} from "../../bestellungen/bestellungen.service";
import {Bestellung} from "../../shared/bestellung.model";

@Component({
  selector: 'app-product-item-add-order',
  templateUrl: './product-item-add-order.component.html',
  styleUrls: ['./product-item-add-order.component.css']
})
export class ProductItemAddOrderComponent implements OnInit {
  @Input() produktItem: Product;
  @Input() orderToEdit: Bestellung;
  show:string;
  constructor(private bestellungenService: BestellungenService) {
  }

  ngOnInit(): void {

  }

  addProductToOrder(){
    this.bestellungenService.addItemToOrder(this.produktItem, this.orderToEdit);
  }

}
