import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  purchaseCoupon(coupon: Coupon) {
  let customerId : string =sessionStorage.getItem("customerId");
    return this.httpClient.post("/customerController/purchaseCoupon/"+customerId, coupon);
  }

  getCustomerCoupons(): Observable<Coupon[]> {
  let customerId : string =sessionStorage.getItem("customerId");
    return this.httpClient.get<Coupon[]>("/customerController/getCustomerCoupons/"+customerId);
  }

  getCustomerCouponsByCategory(category: string): Observable<Coupon[]> {
  let customerId : string =sessionStorage.getItem("customerId");
    return this.httpClient.get<Coupon[]>("/customerController/getCustomerCouponsByCategory/"+customerId, { params: new
    HttpParams().set('category', category) });
  }

  getCustomerCouponsByPrice(maxPrice: number): Observable<Coupon[]> {
  let customerId : string =sessionStorage.getItem("customerId");
    return this.httpClient.get<Coupon[]>("/customerController/getCustomerCouponsByPrice/"+customerId, { params: new HttpParams()
    .set('maxPrice', maxPrice.toString()) });
  }

  getCustomerDetails(): Observable<Customer> {
  let customerId : string =sessionStorage.getItem("customerId");
    return this.httpClient.get<Customer>("/customerController/getCustomerDetails/"+customerId);
  }

  getAllCoupons(): Observable<Coupon[]> {
  let customerId : string =sessionStorage.getItem("customerId");
    return this.httpClient.get<Coupon[]>("/customerController/getAllCoupons/"+customerId);
  }

    getCustomerId(username : string) :  Observable<{companyId :string}> {
       return  this.httpClient.get<{companyId:string}>("/customerController/getCustomerId/"+username)
    }

}
