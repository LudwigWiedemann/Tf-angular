import { Component, OnInit } from '@angular/core';
import { Bestellung } from '../shared/bestellung.model';
import {Product} from "../shared/product.model";




@Component({
  selector: 'app-bestellungen',
  templateUrl: './bestellungen.component.html',
  styleUrls: ['./bestellungen.component.css']
})
export class BestellungenComponent implements OnInit {

  bestellungen:Bestellung[]=[
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
