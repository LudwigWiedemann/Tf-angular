import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Product} from "../shared/product.model";
import {ProdukteService} from "./produkte.service";

@Component({
  selector: 'app-produkte',
  templateUrl: './produkte.component.html',
  styleUrls: ['./produkte.component.css']
})
export class ProdukteComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef : ElementRef;
  products: Product[];
  editProducts = false;


  constructor(private produkteService: ProdukteService) { }

  ngOnInit(): void {
    this.products = this.produkteService.getProducts();
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
      this.produktliste.push(newProduct);
      this.clearInput();
    }
  }

  clearInput() {
    this.nameInputRef.nativeElement.value = '';
    this.descriptionInputRef.nativeElement.value = '';
  }

  deleteItem(zuLoeschendesProdukt: Product){
    for(let i = 0; i < this.produktliste.length; i++){
        if(zuLoeschendesProdukt === this.produktliste[i]){
          this.produktliste.splice(i,1);
        }
    }
  }


}
