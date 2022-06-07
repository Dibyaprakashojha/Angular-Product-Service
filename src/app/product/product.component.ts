import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productsObs!: Observable<Product[]>;

  constructor(private _productService: ProductService) {}

  ngOnInit(): void {
    this.productsObs = this._productService.getProducts();
    // let obs = this._productService.getProducts();
    // obs.subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.products = data;
    //   },
    //   error: (err) => console.log(err),
    //   complete: () => console.log(`completed successfully`),
    // });
  }
}
