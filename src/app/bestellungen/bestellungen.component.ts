import { Component, OnInit } from '@angular/core';
import { Bestellung } from '../shared/bestellung.model';
import {Product} from "../shared/product.model";




@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.css']
})
export class BestellungenComponent implements OnInit {
  products:Product[] = [
    new Product('name','ad'),
    new Product('name','ad'),
    new Product('name','ad')
  ];
  bestellungen:Bestellung[]=[
    new Bestellung('meineBestellung', this.products),
    new Bestellung('deineBestellung', this.products),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onAddOrder(){

  }




}
