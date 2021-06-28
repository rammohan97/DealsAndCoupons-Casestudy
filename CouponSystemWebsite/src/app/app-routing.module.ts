import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerAreaComponent } from './components/customer-area/customer-area.component';
import { AdminAreaComponent } from './components/admin-area/admin-area.component';
import { AddCustomerComponent } from './components/AdminFunctions/add-customer/add-customer.component';
import { DeleteCustomerComponent } from './components/AdminFunctions/delete-customer/delete-customer.component';
import { GetAllCustomersComponent } from './components/AdminFunctions/get-all-customers/get-all-customers.component';
import { GetOneCustomerComponent } from './components/AdminFunctions/get-one-customer/get-one-customer.component';
import { UpdateCustomerComponent } from './components/AdminFunctions/update-customer/update-customer.component';
import { CustomerAuthGuardService } from './services/customer-auth-guard.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: "home", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },


  {
    path: "customer", component: CustomerAreaComponent, canActivate: [CustomerAuthGuardService], children: [
      { path: '', redirectTo: "viewCustomerCoupons", pathMatch: 'full' },
      { path: '**', redirectTo: "viewCustomerCoupons", pathMatch: 'full' },
    ]
  },
  {
    path: "admin", component: AdminAreaComponent, canActivate: [AdminAuthGuardService], children: [
      { path: '', redirectTo: "viewAllCompanies", pathMatch: 'full' },
      { path: "createCustomer", component: AddCustomerComponent },
      { path: "deleteCustomer", component: DeleteCustomerComponent },
      { path: "viewAllCustomers", component: GetAllCustomersComponent },
      { path: "viewCustomer", component: GetOneCustomerComponent },
      { path: "updateCustomer", component: UpdateCustomerComponent },
      { path: '**', redirectTo: "viewAllCompanies", pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
