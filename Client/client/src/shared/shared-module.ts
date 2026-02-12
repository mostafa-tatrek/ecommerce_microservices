import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing-module';
import { OrderSummary } from './order-summary/order-summary';
import { PaginationModule } from 'ngx-bootstrap/pagination';


@NgModule({
  declarations: [
    OrderSummary
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    PaginationModule.forRoot()

  ],
  exports:[
    OrderSummary,
    PaginationModule
  ]
})
export class SharedModule { }
