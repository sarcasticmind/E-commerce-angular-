import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserLogin, UserRegister } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  formLogin: UserLogin = new UserLogin();
  formRegister: UserRegister = new UserRegister();

  constructor(public myClient: HttpClient) {}

  getAllUsers() {
    return this.myClient.get(`${environment.baseUrl}/account`);
  }
  getById(id: number) {
    return this.myClient.get(`${environment.baseUrl}/account/${id}`);
  }
  addUser() {
    return this.myClient.post(
      `${environment.baseUrl}/account`,
      this.formRegister
    );
  }
}
