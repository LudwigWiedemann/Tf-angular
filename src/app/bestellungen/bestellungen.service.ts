import { Injectable } from '@angular/core';
import { Product } from '../shared/product.model';
import {Bestellung} from "../shared/bestellung.model";

@Injectable({
  providedIn: 'root'
})
export class BestellungenService {

  constructor() { }
  pr:Product[]=[new Product('hallo','description'),new Product('name','ad')]
  pl:Product[]=[new Product('hallo','description'),new Product('name','ad')]

  bestellungen:Bestellung[]=[
    new Bestellung('meineBestellung', this.pr),
    new Bestellung('deineBestellung', this.pl),
  ];

  getOrders(){
  return this.bestellungen
  }

  addItemToOrder(itemToAdd: Product, orderToAddTo: Bestellung){
    for(let i = 0; i< this.bestellungen.length; i++){
      if(orderToAddTo.name === this.bestellungen[i].name){
        this.bestellungen[i].products.push(itemToAdd);
      }
    }
  }

  deleteOrder(i: number){
    this.bestellungen.splice(i,1);
  }

  removeItem(produktItem: Product, orderToEdit: Bestellung) {
    for(let i = 0; i< this.bestellungen.length; i++){
      if(orderToEdit.name === this.bestellungen[i].name){
        for(let x = 0; x < this.bestellungen[i].products.length; x++) {
          if (produktItem === this.bestellungen[i].products[x]) {
            this.bestellungen[i].products.splice(x,1);
          }
        }
      }
    }
  }
}
