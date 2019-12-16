import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { map, switchMap, mapTo } from "rxjs/operators";
import { selectByCategory } from "@shared/state/product/product.selector";

import { AppState } from "@shared/state/app.states";
import { CartService } from "@shared/services/cart.service";
import { Product } from "@shared/interfaces/product.interface";
import { Store } from "@ngrx/store";
import { merge, of } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  category$ = this.route.params.pipe(map(({ category }) => category as string));
  products$ = this.category$.pipe(
    switchMap(category => this.store$.select(selectByCategory(category))),
    map(products => (products.length ? products : null))
  );
  loading$ = merge(of(true), this.products$.pipe(mapTo(false)));

  product: Partial<Product>;

  page: number = 1;
  pageSize: number = 6;
  isAdmin: boolean;

  constructor(
    private store$: Store<AppState>,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserRole();
  }

  onSelect(product: Partial<Product>) {
    this.product = product;
  }

  removeProduct(key: number) {
    this.cartService.delete(key);
  }

  addFavourite(product: Product) {
    this.cartService.addFavorite(product);
  }

  addToCart(product: Product) {
    this.cartService.add(product);
  }

  navigateToProductDetail(product: Product) {
    this.router.navigateByUrl(`/catalog/product/${product.id}`, {
      state: { product }
    });
  }

  private getUserRole() {
    /* this.store$
      .select(state => state.userState.role)
      .pipe(
        filter(role => role === "admin"),
        switchMap(() => of(true))
      )
      .subscribe(admin => (this.isAdmin = admin)); */
    this.isAdmin = true;
  }
}
