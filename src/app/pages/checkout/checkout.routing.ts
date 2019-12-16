import { RouterModule, Routes } from "@angular/router";

import { CheckoutComponent } from "./checkout.component";
import { CheckoutListComponent } from "./checkout-list/checkout-list.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { NgModule } from "@angular/core";
import { ShippingComponent } from "./shipping/shipping.component";

export const checkoutRoutes: Routes = [
  {
    path: "",
    component: CheckoutComponent,
    children: [
      {
        path: "",
        component: CheckoutListComponent
      },
      {
        path: "shipping",
        component: ShippingComponent
      },
      {
        path: "invoice",
        component: InvoiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(checkoutRoutes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}
