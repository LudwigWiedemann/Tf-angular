import {Product} from "./product.model";

export class Order{
  constructor(public name: string, public products:Product[]){

  }
}
