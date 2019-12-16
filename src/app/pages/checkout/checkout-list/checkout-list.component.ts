import { Component, OnInit, ViewChild } from "@angular/core";

import { CartService } from "@shared/services/cart.service";
import { Product } from "@shared/interfaces/product.interface";

@Component({
  selector: "checkout-list",
  templateUrl: "./checkout-list.component.html"
})
export class CheckoutListComponent implements OnInit {
  checkoutProducts: Array<Product>;
  total: number;

  constructor(private cartService: CartService) {
    this.checkoutProducts = this.cartService.getAll();
    this.total = this.cartService.calculateTotal();
  }

  ngOnInit() {}
}
