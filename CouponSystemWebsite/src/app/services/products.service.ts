import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { ProductOrder } from '../models/product-order.model';
import { ProductOrders } from '../models/product-orders.model';
import { Product } from '../models/product.model';

@Injectable()
export class ProductsService {
  
  private productsUrl = "/api/products";
      private ordersUrl = "/api/orders";

      private productOrder: ProductOrder;
      private orders: ProductOrders = new ProductOrders();

      private productOrderSubject = new Subject();
      private ordersSubject = new Subject();
      private totalSubject = new Subject();

      private total: number;

      ProductOrderChanged = this.productOrderSubject.asObservable();
      OrdersChanged = this.ordersSubject.asObservable();
      TotalChanged = this.totalSubject.asObservable();
  constructor(private httpCLient : HttpClient) {


   }

   getProducts(categoryName : string) : Observable<Product[]> {
     return this.httpCLient.get<Product[]>(`/productsController/byCategory/${categoryName}`);
   }

    saveOrder(order: ProductOrders, coupon : string, totalAmount: number) : Observable<any> {
           return this.httpCLient.post<any>(`/orderController/saveOrder`, { "productOrderList" :order,
                                                         "couponId" : coupon,
                                                         "amount": totalAmount
                                                        });
       }

       set SelectedProductOrder(value: ProductOrder) {
           this.productOrder = value;
           this.productOrderSubject.next();
       }

       get SelectedProductOrder() {
           return this.productOrder;
       }

       set ProductOrders(value: ProductOrders) {
           this.orders = value;
           this.ordersSubject.next();
       }

       get ProductOrders() {
           return this.orders;
       }

       get Total() {
           return this.total;
       }

       set Total(value: number) {
           this.total = value;
           this.totalSubject.next();
       }

       applyCoupon(coupon: string, category: string,amount: number) : Observable<{message:string, status: number,
       amount : number
       }> {
        return this.httpCLient.post<{message:string, status : number, amount:number}>
        (`customerController/applyCoupon`,{
            "coupon": coupon,
            "category": category,
            "amount": amount
        });
      }
}