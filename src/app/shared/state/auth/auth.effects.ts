import * as AuthActions from "./auth.actions";

import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT
} from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap, filter } from "rxjs/operators";

import { Action } from "@ngrx/store";
import { AuthService } from "@shared/services/auth.service";
import { Injectable } from "@angular/core";
import { loadUser } from "../users/user.actions";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  isLogged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      map(() => localStorage.getItem("token")),
      filter(token => !!token),
      map(token => AuthActions.loginSuccess({ token }))
    )
  );

  login$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ username, password }) =>
        this.authService.login(username, password).pipe(
          tap(token => localStorage.setItem("token", token)),
          map((token: string) => AuthActions.loginSuccess({ token })),
          catchError(error => of(AuthActions.loginFailed(error)))
        )
      )
    )
  );

  loginSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      switchMap(() => of(loadUser()))
    )
  );

  loginFailure$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginFailed, AuthActions.logout),
        tap(() => localStorage.removeItem("token")),
        tap(() => localStorage.removeItem("cart"))
      ),
    { dispatch: false }
  );
}
