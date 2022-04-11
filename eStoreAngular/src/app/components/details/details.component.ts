import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CounterService } from 'src/app/services/counter.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product: any;
  id: any;

  constructor(
    public myservices: ProductService,
    public _activatedRoute: ActivatedRoute,
    private countservice: CounterService
  ) {}

  public ngOnDestroy(): void {}
  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
    this.myservices.getById(this.id).subscribe(
      (response) => {
        this.product = response;
      },

      (error) => {
        console.log(error);
      }
    );
  }

  show() {
    let oldC = Number(localStorage.getItem('counter'));
    localStorage.setItem('counter', `${++oldC}`);
    this.countservice.updateCounter(oldC);
  }
}
