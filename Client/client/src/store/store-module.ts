import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing-module';
import { Store } from './store/store';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductItem } from './product-item/product-item';
import { ProductDetails } from './product-details/product-details';


@NgModule({
  declarations: [
    Store,
    ProductItem,
    ProductDetails
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    HttpClientModule
  ],
   exports:[
    Store
  ]
})
export class StoreModule { }
