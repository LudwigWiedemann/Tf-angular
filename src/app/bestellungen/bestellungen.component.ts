import { Component, OnInit } from '@angular/core';
import { Bestellung } from '../shared/bestellung.model';
import {Product} from "../shared/product.model";
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
  pr:Product[]=[new Product('hallo','description'),new Product('name','ad')]
  bestellungenGesamt:Bestellung[]=[
    new Bestellung('meineBestellung', this.pr),
    new Bestellung('deineBestellung', this.pr),
  ];
  constructor(private produkteService: ProdukteService) { }

  ngOnInit(): void {

  }

  onAddOrder(){
    this.products = this.produkteService.getProducts();
    this.showProducts = true;

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
