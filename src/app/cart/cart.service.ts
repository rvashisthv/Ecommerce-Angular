import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { HttpClient } from '@angular/common/http';
import { cart } from './cart.model';
import { environment } from 'src/environments/environment.development';
import { product } from '../product/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(
    private productservice: ProductService,
    private http: HttpClient
  ) {}
  addCart(prod: product) {
    let c = {
      pid: prod.id,
      name: prod.name,
      price: prod.price,
      imageUrl: prod.imageUrl,
    };
    return this.http.post<cart>(`${environment.apiUrl}/cart`, c);
  }

  getCartvalues(): Observable<cart[]> {
    return this.http.get<cart[]>('http://localhost:3000/cart');
  }
}
