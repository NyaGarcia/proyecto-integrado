import { Product } from "@shared/interfaces/product.interface";
import { createEntityAdapter } from "@ngrx/entity";

export const productAdapter = createEntityAdapter<Product>();
