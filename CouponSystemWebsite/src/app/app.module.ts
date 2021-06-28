import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './services/http-interceptor.service';
import { ListFilterCompanyPipe } from './pipes/list-filter-company.pipe';
import { ListFilterCustomerPipe } from './pipes/list-filter-customer.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';


@NgModule({
  declarations: [
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomersComponent,
    GetOneCustomerComponent,
    LayoutComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    AdminAreaComponent,
    CustomerAreaComponent,
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true },
    ListFilterCompanyPipe,
    ListFilterCustomerPipe,
    ProductsService
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
