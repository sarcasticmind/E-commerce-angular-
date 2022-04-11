import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { UserRegister } from 'src/app/Models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  userValidation;
  users: any;
  unique = false;
  errorMsg: string = '';

  constructor(public myservice: UserService, private route: Router) {
    //validations for inputs
    this.userValidation = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        RxwebValidators.unique(),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      confirmPassword: new FormControl(
        '',
        RxwebValidators.compare({ fieldName: 'password' })
      ),
    });
  }
  get getUsername() {
    return this.userValidation.controls['username'];
  }
  get getPassword() {
    return this.userValidation.controls['password'];
  }
  get getEmail() {
    return this.userValidation.controls['email'];
  }
  get getConfirmpassword() {
    return this.userValidation.controls['confirmPassword'];
  }

  ngOnInit(): void {
    //Gel list of users and assign it to our 'users' array
    this.myservice.getAllUsers().subscribe(
      (response) => (this.users = response),
      (errors) => console.log(errors)
    );
  }

  onSubmit() {
    for (let i = 0; i < this.users.length; i++) {
      //check for if the email exists already
      if (this.userValidation.value.email == this.users[i].user_Email) {
        this.unique = false;
        this.errorMsg = 'error : email used before';
        break;
      } else this.unique = true;
    }
    if (
      this.unique == true &&
      this.myservice.formRegister.User_id == 0 &&
      this.userValidation.status == 'VALID'
    ) {
      window.location.assign('/home');
      this.addUsers();
    }
  }

  addUsers() {
    this.myservice.addUser().subscribe(
      (res) => {
        window.location.reload();
        this.resetForm();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  resetForm() {
    this.myservice.formRegister = new UserRegister();
  }
}
