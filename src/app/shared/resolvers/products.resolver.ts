import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { tap, first, switchMapTo, filter } from "rxjs/operators";
import { Store } from "@ngrx/store";

import { AppState } from "@shared/state/app.states";
import { selectTotal } from "@shared/state/product/product.selector";
import { loadProduct } from "@shared/state/product/product.actions";

@Injectable()
export class ProductsResolver implements Resolve<number> {
  constructor(private store$: Store<AppState>) {}

  resolve() {
    const total$ = this.store$.select(selectTotal);

    return total$.pipe(
      first(),
      tap(total => {
        if (total === 0) {
          this.store$.dispatch(loadProduct());
        }
      }),
      switchMapTo(
        total$.pipe(
          filter(total => total > 0),
          first()
        )
      )
    );
  }
}
