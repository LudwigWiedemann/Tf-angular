import {Product} from "../../shared/product.model";
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Bestellung} from "../../shared/bestellung.model";
import {ProdukteService} from "../../produkte/produkte.service";




@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {
  products: Product[];
  @Output() onDeleteOrder = new EventEmitter<Bestellung>();
  @Output() onShowProducts = new EventEmitter<Bestellung>();
  @Output() dontShowProducts = new EventEmitter<boolean>();
  @Input() dieseBestellung: Bestellung;
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
    this.onDeleteOrder.emit(this.dieseBestellung)
  }

  onAddProducts(dieseBestellung: Bestellung){
    this.addItems = true;
    this.onShowProducts.emit(dieseBestellung);

  }

  accept() {
    this.addItems = false;
    this.dontShowProducts.emit(false);
  }
}

