
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];

  constructor() { }

  addToCart(product: any): void {
    let itemIndex = this.cartItems.findIndex(item => item.name === product.name);
    if (itemIndex !== -1) {
      // If product is already in cart, increase quantity
      this.cartItems[itemIndex].quantity++;
    } else {
      // If product is not in cart, add it with quantity 1
      this.cartItems.push({ ...product, quantity: 1 });
      console.log('Cart items after adding:', this.cartItems);

    }
  }
 
  getCartItems(): any[] {
    console.log('Returning cart items:', this.cartItems);

    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }

  removeItem(item: any): void {
    const index = this.cartItems.findIndex(i => i === item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
}
