import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

import { Product } from "@shared/interfaces/product.interface";

@Component({
  selector: "cart-invoice",
  templateUrl: "./cart-invoice.component.html",
  styleUrls: ["./cart-invoice.component.css"]
})
export class CartInvoiceComponent implements OnChanges {
  @Input() products: Array<Product>;
  total = 0;

  constructor() {}

  ngOnChanges({ products }: SimpleChanges) {
    if (products) {
      this.total = this.products.reduce(
        (acc, product) => acc + Number(product.price),
        0
      );
    }
  }
}
