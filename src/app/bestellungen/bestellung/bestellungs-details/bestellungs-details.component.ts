import {Component, Input, OnInit} from '@angular/core';
import {Bestellung} from "../../../shared/bestellung.model";
import {Product} from "../../../shared/product.model";

@Component({
  selector: 'app-bestellungs-details',
  templateUrl: './bestellungs-details.component.html',
  styleUrls: ['./bestellungs-details.component.css']
})
export class BestellungsDetailsComponent implements OnInit {
@Input() bestellung: Bestellung;

  products:Product[] = [
    new Product('name','ad'),
    new Product('name','ad'),
    new Product('name','ad')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}