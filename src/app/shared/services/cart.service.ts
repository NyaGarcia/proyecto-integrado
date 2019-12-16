import { Injectable } from "@angular/core";
import { Product } from "@shared/interfaces/product.interface";

@Injectable()
export class CartService {
  products: Array<Product> = [];
  favoriteProducts: Array<Product>;

  constructor() {
    const cartStored = localStorage.getItem("cart");

    if (cartStored) {
      this.products = JSON.parse(cartStored);
    }
  }

  getAll(): Array<Product> {
    return this.products;
  }

  delete(id: number): void {
    if (!this.isInCart(id)) {
      throw new Error("Product doesnt exist");
    }
    const indexOfProduct = this.products.findIndex(
      product => product.id === id
    );

    this.products = this.products.filter(
      (_, index) => index !== indexOfProduct
    );
  }

  deleteAll(): void {
    this.products = [];
  }

  add(product: Product): void {
    this.products = [...this.products, product];
    localStorage.setItem("cart", JSON.stringify(this.products));
  }

  addFavorite(product: Product) {
    this.favoriteProducts = [...this.favoriteProducts, product];
    localStorage.setItem("favProducts", JSON.stringify(this.favoriteProducts));
  }

  getFavorites(): Array<Product> {
    return (
      this.favoriteProducts || JSON.parse(localStorage.getItem("favProducts"))
    );
  }

  calculateTotal(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }

  private isInCart(id: number): boolean {
    return this.products.some(product => product.id === id);
  }
}
