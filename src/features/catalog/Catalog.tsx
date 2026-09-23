import type { Product } from "../../app/models/product";
import ProductList from "../../pages/products/ProductListPage";

type Props = {
  products: Product[];
}

export default function Catalog({products}: Props) {
  return (
    <>
      <ProductList products={products} />
      </>
  )
}