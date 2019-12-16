import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "@shared/state/app.states";
import { selectUser } from "@shared/state/users/user.selector";
import { switchMap } from "rxjs/operators";
import { selectIsAuthenticated } from "@shared/state/auth/auth.selectors";
import { of } from "rxjs";
import { CartService } from "@shared/services/cart.service";
import { logout } from "@shared/state/auth/auth.actions";

@Component({
  selector: "main-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  profile$ = this.store$
    .select(selectIsAuthenticated)
    .pipe(
      switchMap(isAuthenticated =>
        isAuthenticated ? this.store$.select(selectUser) : of(null)
      )
    );

  constructor(private store$: Store<AppState>, public cart: CartService) {}

  ngOnInit() {}

  logout() {
    this.store$.dispatch(logout());
  }
}
