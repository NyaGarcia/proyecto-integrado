import { Component, OnInit } from "@angular/core";

import { CartService } from "@shared/services/cart.service";
import { Product } from "@shared/interfaces/product.interface";

@Component({
  selector: "cart",
  templateUrl: "./cart.component.html"
})
export class CartComponent implements OnInit {
  cartProducts: Array<Product>;
  showDataNotFound = true;

  messageTitle = "No Products Found in Cart";
  messageDescription = "Please, Add Products to Cart";

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCartProducts();
  }

  removeCartProduct(product: Product) {
    this.cartService.delete(product.id);
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartProducts = this.cartService.getAll();
  }
}
