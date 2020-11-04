import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../shared/product.model";
import {ProductsService} from "./products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef : ElementRef;
  products: Product[];
  editProducts = false;


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onEdit(){
    this.editProducts = true;
  }

  onReturn(){
    this.editProducts = false;
  }

  onAddItem(){
    if(this.nameInputRef.nativeElement.value !== '' && this.descriptionInputRef.nativeElement.value !== ''){
      const newProduct = new Product(this.nameInputRef.nativeElement.value.trim(),this.descriptionInputRef.nativeElement.value.trim());
      this.productsService.addProduct(newProduct);
      this.clearInput();
    }
  }

  clearInput() {
    this.nameInputRef.nativeElement.value = '';
    this.descriptionInputRef.nativeElement.value = '';
  }

  deleteItem(deletedProduct: Product){ 
    for(let i = 0; i < this.products.length; i++){
      if(deletedProduct === this.products[i]){
          this.productsService.removeProduct(i);
        }
    }
  }


}
