import { Component, OnInit } from "@angular/core";

import { Category } from "@shared/interfaces/category.interface";
import { CategoryService } from "@shared/services/category.service";
import { Router } from "@angular/router";
import { catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "category-banner",
  templateUrl: "./category-banner.component.html",
  styleUrls: ["./category-banner.component.css"]
})
export class CategoryBannerComponent implements OnInit {
  categories: Array<Category>;
  randomCategories: Array<Category>;

  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryService
      .getCategories()
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        })
      )
      .subscribe(categories => {
        this.categories = categories;
        this.randomCategories = this.categories.length
          ? this.getRandomCategories()
          : [];
      });
  }

  getRandomCategories() {
    const random = this.generateRandomArray(this.categories.length - 1);
    return random.map(random => this.categories[random]);
  }

  navigateToCategory(category: Category) {
    this.router.navigateByUrl(`/catalog/categories/${category.name}`, {
      state: { category }
    });
  }

  private generateRandomArray(size: number): Array<number> {
    const random = new Set<number>();
    let iterations = 0;
    while (random.size !== 4 && iterations !== 1000) {
      random.add(Math.floor(Math.random() * size));
      iterations++;
    }

    if (iterations === 1000) {
      throw new Error("RandomArray is not working");
    }

    return [...random];
  }
}
