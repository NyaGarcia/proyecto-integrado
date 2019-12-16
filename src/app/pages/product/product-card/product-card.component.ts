import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Product} from '@shared/interfaces/product.interface';

@Component({
  selector: "product-card",
  templateUrl: "./product-card.component.html",
  styleUrls: ["./product-card.component.css"]
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Output() clickEvent = new EventEmitter<Product>();

  background: string;

  constructor() {}

  ngOnInit() {
    
  }

  emit() {
    this.clickEvent.emit(this.product);
  }
}
