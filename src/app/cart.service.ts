import { Product } from '../products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  items : Products[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }
}
