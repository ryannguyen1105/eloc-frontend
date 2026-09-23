export type Product = {
  ID: number;
  CategoryID?: number;
  Name: string;
  Slug: string;
  Sku: string;
  Price: number;
  Stock?: number;
  CreatedAt?: string;
  UpdatedAt?: string;
};