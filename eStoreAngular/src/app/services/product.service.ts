import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  formData: Product = new Product();

  constructor(public myClient: HttpClient) {}

  getAllProducts() {
    return this.myClient.get(`${environment.baseUrl}/product`);
  }

  getById(id: number) {
    return this.myClient.get(`${environment.baseUrl}/product/${id}`);
  }

  addProducts() {
    return this.myClient.post(`${environment.baseUrl}/product`, this.formData);
  }

  updateProduct() {
    return this.myClient.put(
      `${environment.baseUrl}/product/${this.formData.id}`,
      this.formData
    );
  }

  deleteProduct(id: number) {
    return this.myClient.delete(`${environment.baseUrl}/product/${id}`);
  }
}
