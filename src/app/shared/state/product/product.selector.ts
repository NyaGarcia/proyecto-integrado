import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ProductState } from "./product.state";
import { productAdapter } from "./product.adapter";

export const selectProductState = createFeatureSelector<ProductState>(
  "products"
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = productAdapter.getSelectors(selectProductState);

export const selectProducts = createSelector(selectEntities, entities =>
  Object.values(entities)
);

export const selectByCategory = (category: string) =>
  createSelector(selectProducts, products =>
    products.filter(product => product.category === category)
  );

export const selectProductById = (id: number) =>
  createSelector(selectProducts, products =>
    products.find(product => product.id === id)
  );
