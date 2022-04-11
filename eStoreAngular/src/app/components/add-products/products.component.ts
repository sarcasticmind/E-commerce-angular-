import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  myValidation: any;
  products: any;
  public response: any = { dpPath: '' };
  imgPath: string = this.response.dpPath;
  constructor(
    public myService: ProductService,
  ) {
    this.myValidation = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.min(1),
        Validators.max(10000),
      ]),
    });
  }
  get getName() {
    return this.myValidation.controls['name'];
  }
  get getPrice() {
    return this.myValidation.controls['price'];
  }

  ngOnInit(): void {
    this.myService.getAllProducts().subscribe(
      (response) => (this.products = response),
      (error) => console.log(error)
    );
  }
  onSubmit() {
    if (this.myService.formData.id == 0) {
      this.addProduct();
    } else {
      this.putProduct();
    }
  }

  addProduct() {
    this.myService.addProducts().subscribe(
      (res) => {
        window.location.reload();
        this.resetForm();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  putProduct() {
    this.myService.updateProduct().subscribe(
      (res) => {
        window.location.reload();
        this.resetForm();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public uploadFinished = (event: any) => {
    this.response = event;
  };

  public createImgPath = (serverPath: string) => {
    return `http://localhost:16624/${serverPath}`;
  };

  resetForm() {
    this.myService.formData = new Product();
  }
}
