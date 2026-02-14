import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Account } from '../account';




@Component({
  selector: 'app-signout-redirect-callback',
  template: `<div></div>`
})
export class SignoutRedirectCallbackComponent implements OnInit {

  constructor(private _router: Router, private acntService: Account) { }

  ngOnInit(): void {

    this.acntService.finishLogout()
    .then(_ => {
      this._router.navigate(['/'], { replaceUrl: true });
    })
  }

}
