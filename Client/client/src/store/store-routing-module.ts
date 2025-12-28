import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Store } from './store/store';
import { ProductDetails } from './product-details/product-details';

const routes: Routes = [
   {path:'',component:Store},
   {path:':id',component:ProductDetails,data:{breadcrumb:{alias:'productDetails'}}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
