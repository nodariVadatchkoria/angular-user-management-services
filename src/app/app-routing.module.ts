import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./modules/users/users.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
