import { Product } from "./product.interface";

export interface Order {
  id?: string;
  userId: number;
  description: string;
  products: Product[];
}
