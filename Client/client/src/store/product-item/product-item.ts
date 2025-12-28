import { Component, Input } from '@angular/core';
import { IProduct } from '../../shared/models/product';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {

 @Input() product? :IProduct;

//  constructor(private basketService:BasketService){

//  }

//  addItemToBasket(){
//   this.product && this.basketService.addItemToBasket(this.product);
//  }
}

