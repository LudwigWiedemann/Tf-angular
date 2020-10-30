import {Product} from "../../shared/product.model";
import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Bestellung} from "../../shared/bestellung.model";




@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {
  @Input() dieseBestellung: Bestellung;
  @Input() editOrder: boolean;
  @Output() onDeleteOrder = new EventEmitter<Bestellung>();
  showDetails = false;

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
}

