import * as ProductActions from "./product.actions";

import { Action, createReducer, on } from "@ngrx/store";

import { ProductState } from "./product.state";
import { productAdapter } from "./product.adapter";

export function productInitialState(): ProductState {
  return productAdapter.getInitialState();
}

const reducer = createReducer(
  productInitialState(),
  on(ProductActions.loadProductSuccess, (state, { products }) =>
    productAdapter.addAll(products, state)
  ),
  on(ProductActions.addProductSuccess, (state, { product }) =>
    productAdapter.addOne(product, state)
  ),
  on(ProductActions.deleteProductSuccess, (state, { id }) =>
    productAdapter.removeOne(id, state)
  ),
  on(ProductActions.updateProductSuccess, (state, { id, changes }) =>
    productAdapter.updateOne({ id, changes }, state)
  )
);

export function productReducer(
  state: ProductState | undefined,
  action: Action
) {
  return reducer(state, action);
}
