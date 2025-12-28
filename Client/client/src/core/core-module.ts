import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing-module';
import { Navbar } from './components/navbar/navbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NotFound } from './pages/not-found/not-found';
import { NotAuthenticated } from './pages/not-authenticated/not-authenticated';
import { ServerError } from './pages/server-error/server-error';



@NgModule({
  declarations: [
    Navbar,
    NotFound,
    NotAuthenticated,
    ServerError
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  exports:[
    Navbar,
    NotFound,
    NotAuthenticated,
    ServerError

  ]
})
export class CoreModule { }
