import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing-module';
import { Navbar } from './components/navbar/navbar';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



@NgModule({
  declarations: [
    Navbar
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot()

  ],
  exports:[
    Navbar

  ]
})
export class CoreModule { }
