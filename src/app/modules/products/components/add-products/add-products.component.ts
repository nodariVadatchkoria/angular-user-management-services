import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {IUser} from "../../../../interfaces";
import {ProductsService} from "../../../../services/products.service";

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']})
export class AddProductsComponent implements OnInit {
   users: IUser[] = [];

  constructor(
    private userService: UserService,
    private productsService: ProductsService,
  ) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.users = this.userService.users
  }

  addProduct(name: string, price: number, user: string) {
    if(!name || !price || !user) return;

    this.productsService.addProduct({
      name,
      price,
      user
    })

  }
}
