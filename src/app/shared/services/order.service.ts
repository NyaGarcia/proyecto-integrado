import { Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { Category } from "@shared/interfaces/category.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "@shared/interfaces/order.interface";
import { environment } from "environments/environment";

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {}

  getUserOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.baseUrl}`);
  }

  deleteOrder(id: string): Observable<Order> {
    return this.http.delete<Order>(`${environment.baseUrl}/order/${id}`);
  }

  addOrder(Order: Order): Observable<Order> {
    return this.http.post<Order>(`${environment.baseUrl}/order`, Order);
  }

  updateOrder(id: string, changes: Partial<Order>): Observable<any> {
    return this.http.put<Order>(`${environment.baseUrl}/order/${id}`, changes);
  }
}
