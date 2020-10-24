import {Product} from "./product.model";

export class Bestellung{
  constructor(public name: string, public products:Product[]){

  }
}
