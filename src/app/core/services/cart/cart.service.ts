import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../../../interfaces/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() {}

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
