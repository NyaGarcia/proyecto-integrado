import { CheckoutComponent } from "./checkout.component";
import { CheckoutListComponent } from "./checkout-list/checkout-list.component";
import { CheckoutRoutingModule } from "./checkout.routing";
import { InvoiceComponent } from "./invoice/invoice.component";
import { NgModule } from "@angular/core";
import { OrderService } from "@shared/services/order.service";
import { SharedModule } from "@shared/shared.module";
import { ShippingComponent } from "./shipping/shipping.component";

@NgModule({
  imports: [SharedModule, CheckoutRoutingModule],
  declarations: [
    CheckoutComponent,
    InvoiceComponent,
    ShippingComponent,
    CheckoutListComponent
  ],
  providers: [OrderService]
})
export class CheckoutModule {}
