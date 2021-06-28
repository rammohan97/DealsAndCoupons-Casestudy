import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from '../models/company.model';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  addCompany(company: Company): Observable<any> {
    return this.httpClient.post("/administrator/addCompany", company);
  }

  updateCompany(company: Company): Observable<any> {
    return this.httpClient.put("/administrator/updateCompany", company);
  }

  deleteCompany(id: string) {
    return this.httpClient.delete("/administrator/deleteCompany/" + id);
  }

  getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>("/administrator/getAllCompanies");
  }

  getOneCompany(id: number): Observable<Company> {
    return this.httpClient.get("/administrator/getOneCompany/" + id);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.httpClient.post("/administrator/addCustomer", customer);
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.httpClient.put("/administrator/updateCustomer", customer);
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete(" /administrator/deleteCustomer/" + id);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(" /administrator/getAllCustomers");
  }

  getOneCustomer(id: number): Observable<Customer> {
    return this.httpClient.get(" /administrator/getOneCustomer/" + id);
  }

}
