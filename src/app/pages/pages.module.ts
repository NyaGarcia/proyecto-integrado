import { CartModule } from "./cart/cart.module";
import { CategoryService } from "@shared/services/category.service";
import { HomeModule } from "./home/home.module";
import { LoginComponent } from "./login/login-form/login-form.component";
import { LoginPageComponent } from "./login/login-page.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";
import { SignupComponent } from "./signup/signup-form/signup.component";
import { SignupPageComponent } from "./signup/signup-page.component";
import { UserAccountComponent } from "./user-account/user-account.component";
import { UserProfileComponent } from "./user-account/profile/user-profile.component";

const components = [
  LoginComponent,
  LoginPageComponent,
  SignupComponent,
  SignupPageComponent,
  UserProfileComponent,
  UserAccountComponent
];

@NgModule({
  declarations: [...components],
  imports: [SharedModule, HomeModule, CartModule],
  providers: [CategoryService],
  exports: [...components]
})
export class PagesModule {}
