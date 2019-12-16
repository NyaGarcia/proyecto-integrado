import { CartComponent } from "./cart.component";
import { CartInvoiceComponent } from "./cart-invoice/cart-invoice.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [CartInvoiceComponent, CartComponent],
  imports: [SharedModule],
  exports: [CartComponent]
})
export class CartModule {}
