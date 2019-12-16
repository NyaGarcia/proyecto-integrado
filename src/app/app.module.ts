import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { effects, reducers } from "@shared/state/app.states";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CoreModule } from "@core/core.module";
import { EffectsModule } from "@ngrx/effects";
import { FooterComponent } from "@shared/components/footer/footer.component";
import { HeaderComponent } from "@shared/components/header/header.component";
import { JwtInterceptor } from "@shared/interceptors/jwt.interceptor";
import { LogoutOn401Interceptor } from "@shared/interceptors/logout-on-401.interceptor";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgModule } from "@angular/core";
import { PagesModule } from "@pages/pages.module";
import { ProductsResolver } from "@shared/resolvers/products.resolver";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { UserService } from "@shared/services/user.service";

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    PagesModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    JwtInterceptor,
    LogoutOn401Interceptor,
    UserService,
    ProductsResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useExisting: LogoutOn401Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
