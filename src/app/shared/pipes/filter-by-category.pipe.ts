import { Pipe, PipeTransform } from "@angular/core";

import { Product } from "@shared/interfaces/product.interface";

@Pipe({
  name: "filterByCategory"
})
export class FilterByCategoryPipe implements PipeTransform {
  transform(items: Array<Product>, select: string): Array<Product> {
    return select === "All"
      ? items
      : items.filter(item => item["category"] === select);
  }
}
