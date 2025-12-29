import { Component } from '@angular/core';
import { IProduct } from '../../shared/models/product';
import { StoreService } from '../store.service';
import { ActivatedRoute } from '@angular/router';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails {
   product?:IProduct;
  quantity=1;
  constructor(
    private storeService:StoreService,
    private activatedRoute:ActivatedRoute,
    private bcService:BreadcrumbService
  )
  {

  }
  ngOnInit(): void {
    this.loadProduct()
  }
  dec() { if (this.quantity > 1) this.quantity--; }
  inc() { this.quantity++; }


  loadProduct(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.storeService.getProductById(id!).subscribe({
      next:res=>{
        this.bcService.set("@productDetails",res.name)
        this.product=res;

        console.log(res)
      },
      error:error=>{
        console.log(error)
      }
    })
  }

}
