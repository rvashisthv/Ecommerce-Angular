import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product.model';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  constructor(
    private http: HttpClient,
    private productservice: ProductService,
    private cartservice: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  productsData$: Observable<product[]> = this.productservice.getAllProducts();
  addtocart(prod: any) {
    this.productservice.updateCount();
    this.cartservice
      .addCart(prod)
      .subscribe(() => alert('Product added to cart'));
  }
}
