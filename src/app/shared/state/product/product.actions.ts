import { createAction, props } from "@ngrx/store";

import { Product } from "@shared/interfaces/product.interface";

export const loadProduct = createAction("[Product] Load Product");

export const loadProductSuccess = createAction(
  "[Product] Load Product success",
  props<{ products: Array<Product> }>()
);

export const loadProductFailed = createAction(
  "[Product] Load Product failed",
  props<{ errorMessage: string }>()
);

export const addProduct = createAction(
  "[Product] Add",
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  "[Product] Add success",
  props<{ product: Product }>()
);

export const addProductFailed = createAction(
  "[Product] Add failed",
  props<{ errorMessage: string }>()
);

export const deleteProduct = createAction(
  "[Product] Delete",
  props<{ id: number }>()
);

export const deleteProductSuccess = createAction(
  "[Product] Delete success",
  props<{ id: number }>()
);

export const deleteProductFailed = createAction(
  "[Product] Delete failed",
  props<{ errorMessage: string }>()
);

export const updateProduct = createAction(
  "[Product] Update",
  props<{ id: number; changes: Partial<Product> }>()
);

export const updateProductSuccess = createAction(
  "[Product] Update success",
  props<{ id: number; changes: Partial<Product> }>()
);

export const updateProductFailed = createAction(
  "[Product] Update failed",
  props<{ message: string }>()
);
