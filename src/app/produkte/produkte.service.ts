import { Injectable } from '@angular/core';
import {Product} from "../shared/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProdukteService {
  produktliste:Product[] = [
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),
  ];
  constructor() { }

  getProducts(): Product[]{
    return this.produktliste;
  }
  addProduct(){

  }

  removeProduct(){

  }
}
