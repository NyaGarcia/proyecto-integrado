import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "@shared/interfaces/product.interface";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.baseUrl}/product`);
  }

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${environment.baseUrl}/product/${id}`);
  }

  add(product: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.baseUrl}/product`, product);
  }

  update(id: number, changes: Partial<Product>): Observable<Partial<Product>> {
    return this.http.put<Product>(
      `${environment.baseUrl}/product/${id}`,
      changes
    );
  }
}
