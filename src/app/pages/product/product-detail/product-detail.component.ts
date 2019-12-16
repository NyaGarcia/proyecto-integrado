import { Component } from "@angular/core";

import { ActivatedRoute } from "@angular/router";
import { CartService } from "@shared/services/cart.service";
import { Product } from "@shared/interfaces/product.interface";
import { ProductState } from "@shared/state/product/product.state";
import { Store } from "@ngrx/store";
import { map, switchMap, tap } from "rxjs/operators";
import { selectProductById } from "@shared/state/product/product.selector";
import { selectIsAuthenticated } from "@shared/state/auth/auth.selectors";

@Component({
  selector: "product-detail",
  templateUrl: "./product-detail.component.html"
})
export class ProductDetailComponent {
  product$ = this.route.paramMap.pipe(
    map(params => params.get("id")),
    map(Number),
    switchMap(id => this.store$.select(selectProductById(id)))
  );

  disabled$ = this.store$
    .select(selectIsAuthenticated)
    .pipe(map(isAuthenticated => !isAuthenticated));

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private store$: Store<ProductState>
  ) {}

  addToCart(product: Product) {
    this.cartService.add(product);
  }
}
