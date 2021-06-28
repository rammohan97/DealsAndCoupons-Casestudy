import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';
import {  LoginResponse } from 'src/app/models/login-response';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders( {'access-control-allow-origin': "http://localhost:4200/", 'Content-Type': 'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  loginAdmin(user: User): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>("/users/signIn", user,httpOptions);
  }

  loginCompany(user: User): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>("/users/signIn", user,httpOptions);
  }

  loginCustomer(user: User): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>("/users/signIn", user,httpOptions);
  }
}
