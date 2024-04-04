import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartService } from '../cart.service'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  standalone: true,
  imports: [CommonModule,HttpClientModule ],

})
export class CatalogueComponent implements OnInit {
  products: any[] = [];

  constructor(private http: HttpClient, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('/assets/products.json').subscribe(data => {
      this.products = data;
    });
  }

  addToCart(product: any): void {
    console.log('Adding to cart:', product);
    this.cartService.addToCart(product);
    this.router.navigate(['/cart']);
    


  }
  

  // addToCart(product: any): void {
  //   this.cartService.addToCart(product);
  // }
}
