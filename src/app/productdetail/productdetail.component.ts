import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css'],
})
export class ProductdetailComponent implements OnInit {
  product!: product;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private productservice: ProductService
  ) {}

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;

    console.log(this.id);
    if (this.id) {
      this.productservice
        .getProductById(this.id)
        .subscribe((data) => (this.product = data));
    }
  }
}
