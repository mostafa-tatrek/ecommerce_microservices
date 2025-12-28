import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../home/home/home';
import { NotAuthenticated } from '../core/pages/not-authenticated/not-authenticated';
import { ServerError } from '../core/pages/server-error/server-error';
import { NotFound } from '../core/pages/not-found/not-found';

const routes: Routes = [
  {path:'', component:Home},
  {path:'store',loadChildren:()=>import('../store/store-module').then(m=>m.StoreModule),data:{breadcrumb:'Store'}},
  {path:'not-found' ,component:NotFound},
 {path:'not-authenticated' ,component:NotAuthenticated},
 {path:'server-error' ,component:ServerError},
 {path:'**' ,redirectTo:'' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
