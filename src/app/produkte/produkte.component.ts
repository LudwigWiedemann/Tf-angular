import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../shared/product.model";

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.css']
})
export class ProdukteComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef : ElementRef;

  edit = false;
  products:Product[] = [
    new Product('das ist ein Test Produkt', 'beschreibeung'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onEdit(){
    this.edit = true;
  }

  onReturn(){
    this.edit = false;
  }

  onAddItem(){
    if(this.nameInputRef.nativeElement.value !== '' && this.descriptionInputRef.nativeElement.value !== ''){
      const newProduct = new Product(this.nameInputRef.nativeElement.value,this.descriptionInputRef.nativeElement.value);
      this.products.push(newProduct);
    }
  }

  deleteItem(deletedProductItem: Product){
    for(let item in this.products){

    }
  }


}
