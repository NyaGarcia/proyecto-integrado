import * as ProductActions from "./product.actions";

import { Actions, Effect, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { Action } from "@ngrx/store";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Product } from "@shared/interfaces/product.interface";
import { ProductService } from "@shared/services/product.service";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService,
    public snackBar: MatSnackBar
  ) {}

  loadProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      switchMap(() =>
        this.productService.getAll().pipe(
          tap(products => console.log("MIAU", products)),
          map(products => ProductActions.loadProductSuccess({ products })),
          catchError(error => of(ProductActions.loadProductFailed(error)))
        )
      )
    )
  );

  addProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProduct),
      switchMap(({ product }) =>
        this.productService.add(product).pipe(
          map((product: Product) =>
            ProductActions.addProductSuccess({ product })
          ),
          catchError(error => of(ProductActions.addProductFailed(error)))
        )
      )
    )
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      switchMap(({ id }) =>
        this.productService.delete(id).pipe(
          map(id => ProductActions.deleteProductSuccess(id)),
          catchError(error => of(ProductActions.deleteProductFailed(error)))
        )
      )
    )
  );

  updateProduct$: Observable<Action> = this.actions$.pipe(
    ofType(ProductActions.updateProduct),
    switchMap(({ id, changes }) =>
      this.productService.update(id, changes).pipe(
        map(({ id, ...changes }) =>
          ProductActions.updateProductSuccess({ id, changes })
        ),
        catchError(error => of(ProductActions.updateProductFailed(error)))
      )
    )
  );

  successNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.loadProductSuccess),
        tap(action =>
          this.snackBar.open("SUCCESS", `Operation ${action} success`, {
            duration: 2000
          })
        )
      ),
    { dispatch: false }
  );

  failedNotification$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ProductActions.loadProductFailed),
        tap(action =>
          this.snackBar.open("FAILED", `Operation ${action} failed`, {
            duration: 2000
          })
        )
      ),
    { dispatch: false }
  );
}
