import * as UserActions from "./user.actions";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { User } from "@shared/interfaces/user.interface";
import { UserService } from "@shared/services/user.service";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router,
    public snackBar: MatSnackBar
  ) {}

  loadUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      switchMap(() =>
        this.userService.getProfile().pipe(
          map((user: User) => UserActions.loadUserSuccess({ user })),
          tap(() => this.router.navigate(["/home"])),
          catchError(error => of(UserActions.loadUserFailed(error)))
        )
      )
    )
  );

  updateUser$: Observable<Action> = this.actions$.pipe(
    ofType(UserActions.updateUser),
    switchMap(({ id, changes }) =>
      this.userService.update(id, changes).pipe(
        map(({ id, ...changes }) =>
          UserActions.updateUserSuccess({ id, changes })
        ),
        catchError(error => of(UserActions.updateUserFailed(error)))
      )
    )
  );

  deleteUser$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.deleteUser),
      switchMap(({ id }) =>
        this.userService.delete(id).pipe(
          map(id => UserActions.deleteUserSuccess(id)),
          catchError(error => of(UserActions.deleteUserFailed(error)))
        )
      )
    )
  );
}
