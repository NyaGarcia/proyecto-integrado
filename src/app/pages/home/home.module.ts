import { CarouselComponent } from "./components/carousel/carousel.component";
import { CategoryBannerComponent } from "./components/category-banner/category-banner.component";
import { CategoryService } from "@shared/services/category.service";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "@shared/shared.module";

@NgModule({
  declarations: [HomeComponent, CarouselComponent, CategoryBannerComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent],
  providers: [CategoryService]
})
export class HomeModule {}
