import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(public myServices: ProductService) {}

  products: any;

  ngOnInit(): void {
    this.myServices.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }

  delete(id: number) {
    Swal.fire({
      title: 'Are you sure to delete this item?',
      text: "This item will be removed forever ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, I am sure',
      cancelButtonText: 'no keep it',
    }).then((result) => {
      console.log(result);
      if (result.value) {
        this.myServices.deleteProduct(id).subscribe(
        (res) => {
          window.location.reload();
        },
        (err) => {
          console.log(err);
        }
      );
        // Swal.fire('Deleted', 'The product has been deleted', 'success');
      }
      //  else if (result.dismiss == Swal.DismissReason.cancel) {
      //   Swal.fire('canceled', 'your product is save', 'error');
      // }
    });
  }

  getData(selected: Product) {
    this.myServices.formData = selected;
  }
}
