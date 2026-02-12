import { Component, OnInit, signal } from '@angular/core';
import { BasketService } from '../basket/basket';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App  implements OnInit{
  protected readonly title = signal('client');
   constructor(private basketService:BasketService){
  }
  ngOnInit(): void {
    const basket_name = localStorage.getItem("basket_username");
    if(basket_name){
      this.basketService.getBasket(basket_name);
    }
}
}
