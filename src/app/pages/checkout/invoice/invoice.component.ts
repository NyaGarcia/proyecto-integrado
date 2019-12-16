import * as jspdf from "jspdf";

import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

import { CartService } from "@shared/services/cart.service";
import { MatSnackBar } from "@angular/material";
import { OrderService } from "@shared/services/order.service";
import { Product } from "@shared/interfaces/product.interface";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { User } from "@shared/interfaces/user.interface";
import { UserState } from "@shared/state/users/user.state";
import html2canvas from "html2canvas";
import { selectedUser } from "@shared/state/users/user.reducer";
import { tax } from "@shared/constants/billing.constants";

@Component({
  selector: "invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  products: Product[];
  date: Date;
  totalPrice: number;
  tax: number;
  user: User;

  @ViewChild("invoice", { static: false }) invoice: ElementRef;

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private store$: Store<UserState>,
    public snackBar: MatSnackBar,
    public router: Router
  ) {}

  ngOnInit() {
    this.date = new Date();
    this.totalPrice = this.cartService.calculateTotal();
    this.products = this.cartService.getAll();
    this.tax = tax;
    this.store$.select(selectedUser).subscribe(user => {
      this.user = user;
    });
  }

  async downloadInvoice() {
    const image = await this.buildImage(this.invoice.nativeElement);
    this.savePdf(image);
  }

  private async buildImage(element: HTMLElement) {
    const canvas = await html2canvas(element);

    const imgWidth = 208;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    const contentDataURL = canvas.toDataURL("image/png");

    return { contentDataURL, imgWidth, imgHeight };
  }

  private savePdf({ contentDataURL, imgWidth, imgHeight }) {
    const pdf = new jspdf("p", "mm", "a4");
    const position = 0;
    pdf.addImage(contentDataURL, "PNG", 0, position, imgWidth, imgHeight);
    pdf.save("invoice.pdf");
  }

  pay() {
    const order = {
      products: this.products,
      description: `An order consisting of ${this.products.length} products.`,
      userId: this.user.id
    };

    this.orderService.addOrder(order).subscribe();
    this.snackBar.open("SUCCESS", `Thank you for your purchase! :-D`, {
      duration: 2000
    });

    this.router.navigate(["/home"]);

    this.cartService.deleteAll();
  }
}
