import { Billing } from "@shared/interfaces/billing.interface";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShippingService {
  shipping: Billing;
  constructor() {}

  createshipping(data: Billing) {
    this.shipping = data;
  }

  getshipping() {
    return this.shipping;
  }

  updateshipping(data: Billing): void {
    this.shipping = data;
  }

  deleteshipping(id: string): void {
    this.shipping = null;
  }
}
