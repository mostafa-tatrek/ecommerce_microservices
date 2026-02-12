import { Component } from '@angular/core';
import { BasketService } from '../../basket/basket';

@Component({
  selector: 'app-order-summary',
  standalone: false,
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.scss',
})
export class OrderSummary {
    constructor(public basketService:BasketService){}


}
