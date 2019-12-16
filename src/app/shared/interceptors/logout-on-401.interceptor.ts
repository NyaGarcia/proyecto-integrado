import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse
} from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppState } from "@shared/state/app.states";
import { Store } from "@ngrx/store";
import { logout } from "@shared/state/auth/auth.actions";

@Injectable()
export class LogoutOn401Interceptor implements HttpInterceptor {
  constructor(private store$: Store<AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.store$.dispatch(logout());
        }

        return throwError(error);
      })
    );
  }
}
