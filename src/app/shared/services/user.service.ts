import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "@shared/interfaces/user.interface";
import { environment } from "environments/environment";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/profile`);
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${environment.baseUrl}/user/${id}`);
  }

  add(User: User): Observable<User> {
    return this.http.post<User>(`${environment.baseUrl}/user`, User);
  }

  update(id: number, changes: Partial<User>): Observable<any> {
    return this.http.put<User>(`${environment.baseUrl}/user/${id}`, changes);
  }
}
