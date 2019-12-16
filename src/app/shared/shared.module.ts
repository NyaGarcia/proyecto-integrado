import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSnackBarModule,
  MatToolbarModule
} from "@angular/material";

import { CardLoaderComponent } from "@shared/components/card-loader/card-loader.component";
import { CommonModule } from "@angular/common";
import { FilterByCategoryPipe } from "./pipes/filter-by-category.pipe";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { ImageCardComponent } from "./components/card/image-card.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { NgModule } from "@angular/core";
import { NgxContentLoadingModule } from "ngx-content-loading";
import { NgxPaginationModule } from "ngx-pagination";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { sanitizeHtmlPipe } from "./pipes/sanitize.pipe";

const MaterialModules = [
  MatInputModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatCardModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatPaginatorModule
];
const pipes = [FilterByCategoryPipe, sanitizeHtmlPipe];
const components = [CardLoaderComponent, ImageCardComponent];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule,
    RouterModule,
    NgxContentLoadingModule,
    NgxPaginationModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    ...MaterialModules,
    MDBBootstrapModule,
    ...components,
    ...pipes,
    RouterModule,
    NgxPaginationModule
  ]
})
export class SharedModule {}
