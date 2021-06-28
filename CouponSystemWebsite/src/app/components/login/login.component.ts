import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import {  LoginResponse } from 'src/app/models/login-response';
import { ClientType } from 'src/app/models/clientType.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  clientType: string;
  clientSelect = Object.values(ClientType).slice(0, Object.values(ClientType).length / 2);
  err: string;

  constructor(private router: Router, private activatedRoute : ActivatedRoute,
  private loginService: LoginService, private dataService: DataService
  ,private companyService : CompanyService, private customerService : CustomerService) { }

  ngOnInit(): void {
    if (this.dataService.getErr()) {
      this.err = this.dataService.getErr();
    }
  }

  login() {
    switch (this.clientType) {

      case "Administrator": {
        let obsJwt: Observable<LoginResponse> = this.loginService.loginAdmin(new User(this.email, this
        .password,this.clientType));
        obsJwt.subscribe(user => {
          sessionStorage.setItem("Authorization", "Bearer " + user.token);
          sessionStorage.setItem("user", JSON.stringify(user));
          this.router.navigateByUrl('/admin');
        }, (err => {
          if (err.status === 0)
            this.err = this.dataService.getErr();
          else
            this.err = err.error.message;
        }));
        break;
      }

      case "Company": {
        let obsJwt: Observable<LoginResponse> = this.loginService.loginCompany(new User(this.email, this
        .password,this.clientType));
        obsJwt.subscribe(user => {
                                   sessionStorage.setItem("Authorization", "Bearer " + user.token);
                                   sessionStorage.setItem("user", JSON.stringify(user));
          this.companyService.getCompanyId(user.username).subscribe(
             data => {
                         sessionStorage.setItem("companyId",data.companyId);
                         this.router.navigateByUrl('/company');
                     }
         );

        }, (err => {
          if (err.status === 0)
            this.err = this.dataService.getErr();
          else
            this.err = err.error.message;
        }));
        break;
      }

      case "Customer": {
        let obsJwt: Observable<LoginResponse> = this.loginService.loginCustomer(new User(this.email, this
        .password,this.clientType));
        obsJwt.subscribe(user => {
           sessionStorage.setItem("Authorization", "Bearer " + user.token);
           sessionStorage.setItem("user", JSON.stringify(user));
           this.customerService.getCustomerId(user.username).subscribe(
                        data => {
                                    sessionStorage.setItem("customerId",data.companyId);
                                      this.router.navigateByUrl('/customer');
                                })

        }, (err => {
          if (err.status === 0)
            this.err = this.dataService.getErr();
          else
            this.err = err.error.message;
        }));
        break;
      }
      default: {
        break;
      }
    }
  }
}
