import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  orderTotal: number = 0;

  constructor(private cartService: CartService, private cdr: ChangeDetectorRef, private router: Router) { }

  ngOnInit(): void {
    this.getCartItems();
    console.log('Cart items:', this.cartItems);
    this.cdr.detectChanges();
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateOrderTotal();
  }

  calculateOrderTotal(): void {
    this.orderTotal = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  adjustQuantity(item: any, increment: boolean): void {
    if (increment) {
      item.quantity++;
    } else {
      if (item.quantity > 1) {
        item.quantity--;
      }
    }
    this.calculateOrderTotal();
  }

  removeProduct(index: number): void {
    this.cartItems.splice(index, 1);
    this.calculateOrderTotal();
  }

  checkout(): void {
    // Navigate to the confirm order page
    this.router.navigate(['/confirm-order']);
  }
}
