import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../../basket/basket';
import { IBasketItem } from '../../../shared/models/basket';
import { Account} from '../../../account/account';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  isUserAuthenticated: boolean = false;
  constructor(
    public basketService: BasketService,
    public accountService: Account,
  ) {}

  ngOnInit(): void {
    this.accountService.currentUser$.subscribe({
      next: (res) => {
        this.isUserAuthenticated = res;
        console.log('is authenticated', this.isUserAuthenticated);
      },
      error: (err) => {
        console.log('An error occured while setting authenticated flag');
      },
    });
  }

  login() {
    this.accountService.login();
  }
  logout() {
    this.accountService.logout();
  }

  getBasketCount(items: IBasketItem[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }
}
