import { Component, OnInit } from '@angular/core';
import { Bestellung } from '../shared/bestellung.model';
import {Product} from "../shared/product.model";
import {BestellungenService} from "./bestellungen.service";
import {ProdukteService} from "../produkte/produkte.service";




@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.css']
})
export class BestellungenComponent implements OnInit {
  editOrder = false;
  showProducts = false;
  products:Product[];
  orders: Bestellung[];
  orderToEdit: Bestellung;
  addItems: false;


  constructor(private bestellungenService: BestellungenService,private produkteService: ProdukteService) { }

  ngOnInit(): void {
    this.orders = this.bestellungenService.getOrders();
  }

  onEditOrder() {
    this.editOrder = true;

  }

  onReturn(){
    this.addItems = false;
    console.log('add Items = false');
    console.log(this.addItems);
    this.editOrder = false;
    this.showProducts = false;

  }

  deleteAnOrder(zuLoeschendeBestellung: Bestellung) {
    for(let i = 0; i < this.orders.length; i++){
      if(zuLoeschendeBestellung === this.orders[i]){
        this.bestellungenService.deleteOrder(i);
      }
    }
  }
  showAllProducts(bestellung: Bestellung){
    this.orderToEdit = bestellung;
    this.products = this.produkteService.getProducts();
    this.showProducts = true;

  }
}
