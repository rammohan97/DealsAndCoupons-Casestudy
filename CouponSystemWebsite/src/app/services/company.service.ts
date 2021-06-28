import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Coupon } from '../models/coupon.model';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {

  }
  getCompanyId(username : string) :  Observable<{companyId :string}> {
     return  this.httpClient.get<{companyId:string}>("/companyController/getCompanyId/"+username)
  }

  addCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.post("/companyController/addCoupon", coupon);
  }

  updateCoupon(coupon: Coupon): Observable<any> {
    return this.httpClient.put("/companyController/updateCoupon", coupon);
  }

  deleteCoupon(id: string) {
    return this.httpClient.delete("/companyController/deleteCoupon/" + id);
  }

  getAllCoupons(): Observable<Coupon[]> {
     let companyId : string =sessionStorage.getItem("companyId");
    return this.httpClient.get<Coupon[]>("/companyController/getCompanyCoupons/"+companyId);
  }

  getAllCouponsByCategory(category: string): Observable<Coupon[]> {
    let companyId : string =sessionStorage.getItem("companyId");
    return this.httpClient.get<Coupon[]>("/companyController/getCompanyCouponsByCategory/"+companyId, { params: new
    HttpParams().set('category', category) });
  }

  getAllCouponsByPrice(maxPrice: number): Observable<Coupon[]> {
   let  companyId : string =sessionStorage.getItem("companyId");
    return this.httpClient.get<Coupon[]>("/companyController/getCompanyCouponsByPrice/"+companyId, { params: new
    HttpParams()
    .set('maxPrice', maxPrice.toString()) });
  }

  getCompanyDetails(): Observable<Company> {
    let companyId : string =sessionStorage.getItem("companyId");
    return this.httpClient.get<Coupon>("/companyController/getCompanyDetails/"+companyId);
  }
}
