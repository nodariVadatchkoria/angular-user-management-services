import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {AddUserComponent} from "./components/add-user/add-user.component";
import {UserItemComponent} from "./components/user-item/user-item.component";
import {ButtonModule} from "../../components/button/button.module";
import {DropdownModule} from "../../components/dropdown/dropdown.module";
import {SharedModule} from "../../shared/shared.module";
import {UserService} from "../../services/user.service";
import {RouterModule} from "@angular/router";
import {ProductsComponent} from "../products/products.component";



@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserItemComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent
      }
    ]),
    ButtonModule,
    DropdownModule,
    SharedModule
  ],
  providers: []
})
export class UsersModule { }
