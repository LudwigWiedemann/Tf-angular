import {Product} from "../../shared/product.model";
import {Component, Input, OnInit} from '@angular/core';
import {Bestellung} from "../../shared/bestellung.model";

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {
@Input() bestellung: Bestellung
  showDetails=false;
  constructor() { }

  ngOnInit(): void {
  }

  showOrderDetails(){
  this.showDetails = !this.showDetails;
  }
}

