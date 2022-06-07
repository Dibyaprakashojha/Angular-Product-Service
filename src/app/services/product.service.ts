import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // products: Product[] = [
  //   new Product(1, 'Earphones', 'Sony', 'Gadgets', 899),
  //   new Product(2, 'Bravia', 'Sony', 'Gadgets', 29000),
  //   new Product(3, 'Keyboard', 'Corsair', 'Gadgets', 2899),
  //   new Product(4, 'A56', 'Samsung', 'Mobile', 28999),
  //   new Product(5, 'Rog 5', 'Asus', 'Mobile', 58999),
  //   new Product(6, 'Rog 3', 'Asus', 'Mobile', 43999),
  //   new Product(7, 'Toy Train', 'Hamleys', 'Toys', 999),
  //   new Product(8, 'Toy Gun', 'Hamleys', 'Toys', 599),
  //   new Product(9, 'Trimmer', 'Philips', 'Appliances', 1299),
  //   new Product(10, 'Washing Machine', 'Whirphool', 'Appliances', 18599),
  //   new Product(11, 'AC', 'Whirphool', 'Appliances', 39599),
  //   new Product(12, 'Sneakers', 'Jordan', 'Shoes', 45999),
  //   new Product(13, 'Elvi Customed', 'Elvi', 'Shoes', 89599),
  //   new Product(14, 'Air Jordan', 'Jordan', 'Shoes', 69999),
  // ];

  // private _url = '../../assets/products.json';
  private _url = 'http://localhost:8081/product-api/products';

  constructor(private _httpClient: HttpClient) {}

  getProducts = (): Observable<Product[]> => {
    return this._httpClient.get<Product[]>(this._url);
  };
}
