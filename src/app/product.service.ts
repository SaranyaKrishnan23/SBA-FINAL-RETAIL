import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './view-product/Product';

const baseUrl: string = 'http://localhost:8000/api/products/'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  addProduct(product: Product){
    return this.httpClient.post(baseUrl,product )
  }

  deleteProduct(index: number){
    return this.httpClient.delete(baseUrl + index)
  }

  fetchAllProduct(){
    return this.httpClient.get(baseUrl);
  }

  fetchProduct(id: string){
    return this.httpClient.get(baseUrl + id);
  }

  public products : Array<Product> = []
}
