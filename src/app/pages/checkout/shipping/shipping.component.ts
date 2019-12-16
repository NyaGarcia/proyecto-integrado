import { Component, OnInit } from "@angular/core";

import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ShippingService } from "@shared/services/shipping.service";
import { AppState } from "@shared/state/app.states";
import { Store } from "@ngrx/store";
import { selectUser } from "@shared/state/users/user.selector";

@Component({
  selector: "shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent {
  profile$ = this.store$.select(selectUser);

  constructor(
    private shippingService: ShippingService,
    private router: Router,
    private route: ActivatedRoute,
    private store$: Store<AppState>
  ) {}

  updateUserDetails(form: NgForm) {
    const data = form.value;

    data.shippingDate = Date.now();

    this.shippingService.createshipping(data);

    this.router.navigate(["/checkout/invoice"]);
  }
}
