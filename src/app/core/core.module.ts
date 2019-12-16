import { NgModule } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CartService } from "@shared/services/cart.service";

@NgModule({
  imports: [MDBBootstrapModule.forRoot()],
  providers: [CartService]
})
export class CoreModule {}
