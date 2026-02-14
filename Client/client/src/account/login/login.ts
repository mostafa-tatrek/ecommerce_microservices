import { Component } from '@angular/core';
import { Account } from '../account';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
   title="Login"
  constructor(private acntService: Account) { }

  login(){
    this.acntService.login();
  }

}
