import { Observable, of } from "rxjs";
import { switchMap, tap } from "rxjs/operators";

import { Category } from "@shared/interfaces/category.interface";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";

@Injectable()
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Array<Category>> {
    const categories: Array<Category> = JSON.parse(
      localStorage.getItem("categories")
    );

    if (!categories) {
      console.log("FETCHING");
      return this.http
        .get<Array<Category>>(`${environment.baseUrl}/category`)
        .pipe(
          tap(categories => {
            localStorage.setItem("categories", JSON.stringify(categories));
          })
        );
    }
    return of(categories);
  }

  delete(id: string): Observable<Category> {
    return this.http.delete<Category>(`${environment.baseUrl}/category/${id}`);
  }

  add(category: Category): Observable<Category> {
    return this.http.post<Category>(
      `${environment.baseUrl}/category`,
      category
    );
  }

  update(id: string, changes: Partial<Category>): Observable<any> {
    return this.http.put<Category>(
      `${environment.baseUrl}/category/${id}`,
      changes
    );
  }
}
