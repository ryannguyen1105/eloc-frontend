export type Product = {
  id: number;
  category_id?: number;
  name: string;
  slug: string;
  sku: string;
  price: number;
  stock: number;
  pictureUrl: string;
  created_at?: string;
  updated_at?: string;
};