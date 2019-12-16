import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "@shared/interfaces/user.interface";
import { environment } from "@environments/environment";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) {}

  isLoggedIn() {}

  getToken() {
    return localStorage.getItem("token");
  }

  login(username: string, password: string): Observable<string> {
    return this.http
      .post<{ access_token: string }>(`${environment.baseUrl}/login`, {
        username,
        password
      })
      .pipe(map(({ access_token }) => access_token));
  }

  signUp(user: User) {
    return this.http.post<User>(`${environment.baseUrl}/user`, user);
  }
}
