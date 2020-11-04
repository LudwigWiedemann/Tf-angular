import { Injectable } from '@angular/core';
import {Product} from "../shared/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  produktliste:Product[] = [
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),
    new Product('das ist ein Test Produkt', 'beschreibeung'),

  ];
  constructor() { }

  getProducts(): Product[]{
    return this.produktliste;
  }
  addProduct(newProduct: Product){
    this.produktliste.push(newProduct);
  }

  removeProduct(i:number){
    this.produktliste.splice(i,1);
  }
}
