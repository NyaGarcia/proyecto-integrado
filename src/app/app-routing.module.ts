import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "@pages/home/home.component";
import { LoginPageComponent } from "@pages/login/login-page.component";
import { NgModule } from "@angular/core";
import { SignupPageComponent } from "@pages/signup/signup-page.component";
import { ProductsResolver } from "@shared/resolvers/products.resolver";
import { UserProfileComponent } from "@pages/user-account/profile/user-profile.component";
import { CartComponent } from "@pages/cart/cart.component";
import { AuthGuard } from "@shared/guards/auth.guard";

const routes: Routes = [
  {
    path: "catalog",
    loadChildren: () =>
      import("@pages/product/product.module").then(
        ({ ProductModule }) => ProductModule
      ),
    resolve: { _: ProductsResolver }
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "profile",
    component: UserProfileComponent
  },
  {
    path: "cart",
    component: CartComponent
  },
  {
    path: "checkout",
    canLoad: [AuthGuard],
    loadChildren: () =>
      import("@pages/checkout/checkout.module").then(
        ({ CheckoutModule }) => CheckoutModule
      )
  },
  { path: "login", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
