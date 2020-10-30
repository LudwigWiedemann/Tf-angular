import { Component, OnInit } from '@angular/core';
import { Bestellung } from '../shared/bestellung.model';
import {Product} from "../shared/product.model";




@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.css']
})
export class BestellungenComponent implements OnInit {
  editOrder = false;
  pr:Product[]=[new Product('hallo','description'),new Product('name','ad')]
  bestellungenGesamt:Bestellung[]=[
    new Bestellung('meineBestellung', this.pr),
    new Bestellung('deineBestellung', this.pr),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddOrder(){

  }


  onEditOrder() {
    this.editOrder = true;
  }

  onReturn(){
    this.editOrder = false;
  }

  deleteAnOrder(zuLoeschendeBestellung: Bestellung) {
    for(let i = 0; i < this.bestellungenGesamt.length; i++){
      if(zuLoeschendeBestellung === this.bestellungenGesamt[i]){
        this.bestellungenGesamt.splice(i,1);
      }
    }
  }
}
