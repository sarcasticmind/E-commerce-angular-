import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CounterService } from 'src/app/services/counter.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  templateUrl: './nacbar.component.html',
  styleUrls: ['./nacbar.component.css'],
})
export class NacbarComponent implements OnInit {
  public counterForSibling: number = Number(localStorage.getItem('counter'));
  public subscription: Subscription;
  logged = true;
  constructor(private route: Router, private counterStream: CounterService) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription = this.counterStream
      .getCounter()
      .subscribe((c) => (this.counterForSibling = c));
  }

  clear(e: any) {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, I am sure',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.value) {
        Swal.fire('Logged out', 'Please, login again to continue', 'success');
        localStorage.setItem('counter', '0');
        this.route.navigate(['/']);
        this.counterForSibling = 0;
        this.logged = false;
        e.target.style.display = 'none';
      }
    });
  }
}
