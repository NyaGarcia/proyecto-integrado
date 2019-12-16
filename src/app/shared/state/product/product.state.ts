import { EntityState } from "@ngrx/entity";
import { Product } from "@shared/interfaces/product.interface";

export interface ProductState extends EntityState<Product> {}
