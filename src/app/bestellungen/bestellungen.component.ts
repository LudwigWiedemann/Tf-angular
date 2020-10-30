import { Component, OnInit } from '@angular/core';
import { Bestellung } from '../shared/bestellung.model';
import {Product} from "../shared/product.model";




@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.css']
})
export class BestellungenComponent implements OnInit {

  bestellungenGesamt:Bestellung[]=[
    new Bestellung('meineBestellung', [new Product('hallo','description'),new Product('name','ad')]),
    new Bestellung('deineBestellung', [new Product('hallo','description'),new Product('name','ad')]),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onAddOrder(){

  }




}
