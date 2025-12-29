import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing-module';
import { Home } from './home/home';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    Home
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot()
  ]
})
export class HomeModule { }
