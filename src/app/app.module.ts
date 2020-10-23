import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BestellungenComponent } from './bestellungen/bestellungen.component';
import { ProdukteComponent } from './produkte/produkte.component';
import { ProductItemComponent } from './produkte/product-item/product-item.component';
import { BestellungComponent } from './bestellung/bestellung.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BestellungenComponent,
    ProdukteComponent,
    ProductItemComponent,
    BestellungComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
