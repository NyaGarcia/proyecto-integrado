export class Category {
  name: string;
  src: string;
}

export class ParentCategory extends Category {
  subcategories: Array<Category | ParentCategory>;
}
