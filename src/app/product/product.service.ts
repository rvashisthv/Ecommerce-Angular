import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from './product.model';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getAllProducts(): Observable<product[]> {
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  cartCount: number = 0;
  countSubject$ = new Subject<number>();
  updateCount() {
    this.cartCount++;
    this.countSubject$.next(this.cartCount);
    console.log('updated count' + this.cartCount);
  }
  getCount() {
    console.log('cartcount in service:' + this.cartCount);
    return this.cartCount;
  }
  getProductById(id: number): Observable<product> {
    return this.http.get<product>(`${environment.apiUrl}/products/${id}`);
  }
}
