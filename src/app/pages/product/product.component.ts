import { Component, Input, OnInit } from "@angular/core";

import { Product } from "@shared/interfaces/product.interface";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html"
})
export class ProductComponent implements OnInit {
  @Input("product") product: Product;

  constructor() {}

  ngOnInit() {}
}
