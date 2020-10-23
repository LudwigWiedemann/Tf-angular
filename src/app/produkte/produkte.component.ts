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
  products:Product[] = [
  ];
  constructor() { }
  producItems
  ngOnInit(): void {
  }
  onAddItem(name:string, description:string){
    const newProduct = new Product(this.nameInputRef.nativeElement.value,this.descriptionInputRef.nativeElement.value);
    this.products.push(newProduct);
  }

}
