import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ProductComponent } from "./product.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  {
    path: "categories/:category",
    component: ProductListComponent
  },
  {
    path: "product/:id",
    component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
