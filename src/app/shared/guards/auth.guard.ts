import { CanLoad, Router } from "@angular/router";
import { map, filter, first } from "rxjs/operators";

import { AuthState } from "@shared/state/auth/auth.state";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectAuthenticatedUser } from "@shared/state/auth/auth.selectors";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private store$: Store<AuthState>) {}

  canLoad() {
    return this.store$.select(selectAuthenticatedUser).pipe(
      first(),
      map(Boolean),
      map(isAuthenticated => {
        if (!isAuthenticated) {
          this.router.navigate(["/login"]);

          return false;
        }

        return true;
      })
    );
  }
}
