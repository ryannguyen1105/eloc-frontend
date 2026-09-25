export type Product = {
  id: number;
  category_id?: number;
  name: string;
  slug: string;
  sku: string;
  price: number;
  stock?: number;
  created_at?: string;
  updated_at?: string;
};