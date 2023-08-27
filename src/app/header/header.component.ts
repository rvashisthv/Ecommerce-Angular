import { Component } from '@angular/core';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  count: number = 0;
  constructor(private productService: ProductService) {
    productService.countSubject$.subscribe((data) => (this.count = data));
  }
  getCount() {
    this.count = this.productService.getCount();
  }
}
