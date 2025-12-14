export type ProductsResponse = {
  success: boolean;
  status: string;
  message: string;
  data?: Product[];
};
export type Product = {
  id: string;
  name: string;
  description: string;
  subDescription: Array<string>;
  image: string;
  price: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};
