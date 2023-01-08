import { Injectable } from '@angular/core';
import {IProduct} from "../interfaces";

@Injectable()
export class ProductsService {
  products: IProduct[] = []
  constructor() { }

  addProduct(product: IProduct) {
    this.products.push(product)
  }
}
