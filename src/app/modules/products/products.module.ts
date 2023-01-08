import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { AddProductsComponent } from './components/add-products/add-products.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import {ButtonModule} from "../../components/button/button.module";
import {ProductsService} from "../../services/products.service";
import {RouterModule} from "@angular/router";
import {UserService} from "../../services/user.service";



@NgModule({
  declarations: [
    ProductsComponent,
    AddProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ]),
    ButtonModule
  ],
  providers: [ProductsService, ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
