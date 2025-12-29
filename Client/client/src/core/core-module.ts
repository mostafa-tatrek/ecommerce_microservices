import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing-module';
import { Navbar } from './components/navbar/navbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NotFound } from './pages/not-found/not-found';
import { NotAuthenticated } from './pages/not-authenticated/not-authenticated';
import { ServerError } from './pages/server-error/server-error';
import { Header } from './components/header/header';
import {
  BreadcrumbComponent,
  BreadcrumbItemDirective,
  BreadcrumbService
} from 'xng-breadcrumb';
import {NgxSpinnerModule} from 'ngx-spinner';




@NgModule({
  declarations: [
    Navbar,
    NotFound,
    NotAuthenticated,
    ServerError,
    Header
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
     BreadcrumbComponent,
    BreadcrumbItemDirective,
    NgxSpinnerModule

  ],
  exports:[
    Navbar,
    NotFound,
    NotAuthenticated,
    ServerError,
    Header,
     NgxSpinnerModule


  ],
  providers:[
    BreadcrumbService
  ]
})
export class CoreModule { }
