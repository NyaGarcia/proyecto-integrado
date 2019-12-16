export interface Product {
  id: number;
  name: string;
  title: string;
  image: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  createdAt: Date;
  salePrice: number;
  onSale: boolean;
}
