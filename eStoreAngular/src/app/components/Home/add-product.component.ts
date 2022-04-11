import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {ProductService } from 'src/app/services/product.service';
import {  CounterService } from 'src/app/services/counter.service';
import { empty, Subscription } from 'rxjs';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public  subscription: Subscription;

products : any;

  constructor(public myService: ProductService , private countservice: CounterService) {
    this.subscription = new Subscription();
   }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  }
  ngOnInit(): void {
    this.myService.getAllProducts().subscribe(
      (response) => this.products = response,
      (error) => console.log(error)
    )
  }

  addToCounter(){
    let counter = Number(localStorage.getItem('counter'));
    localStorage.setItem('counter',`${++counter}`)
    this.countservice.updateCounter(counter);
  }
}
