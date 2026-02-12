import { Component } from '@angular/core';
import { BasketService } from '../basket';
import { IBasketItem } from '../../shared/models/basket';

@Component({
  selector: 'app-basket',
  standalone: false,
  templateUrl: './basket.html',
  styleUrl: './basket.scss',
})
export class Basket {
  constructor(public basketService:BasketService){

  }

  decrease(item:IBasketItem){
    this.basketService.decrementItemQuantity(item);
  }
  increase(item:IBasketItem){
    this.basketService.incrementItemQuantity(item);
  }
  remove(item:IBasketItem){
    this.basketService.removeItemFromBasket(item)
  }
}


