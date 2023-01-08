import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../interfaces";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: IProduct[] = []
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this.products = this.productsService.products
  }

}
