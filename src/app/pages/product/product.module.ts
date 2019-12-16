import { NgModule } from "@angular/core";
import { ProductCardComponent } from "./product-card/product-card.component";
import { ProductComponent } from "./product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductCardComponent
  ],
  imports: [SharedModule, ProductRoutingModule],
  exports: [ProductListComponent, ProductComponent, ProductDetailComponent]
})
export class ProductModule {}
