import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userValidation;
  users: any;
  errorMsg: string = '';

  constructor(public myservice: UserService, private route: Router) {
    //validation for inputs
    this.userValidation = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
      ]),
    });
  }

  ngOnInit(): void {
    this.myservice
      .getAllUsers()
      .subscribe((response) => (this.users = response));
  }
  get getEmail() {
    return this.userValidation.controls['email'];
  }
  get getPassword() {
    return this.userValidation.controls['password'];
  }

  login() {
    for (let i = 0; i < this.users.length; i++) {
      if (
        this.users[i].user_Email == this.userValidation.value.email &&
        this.users[i].user_Password == this.userValidation.value.password
      ) {

        window.location.assign('/home');
      } else {
        this.errorMsg = 'invalid name or password';
      }
    }
  }
}
