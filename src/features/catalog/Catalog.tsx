import { useEffect, useState } from "react";
import type { Product } from "../../app/models/product";
import ProductList from "../../pages/products/ProductListPage";
import agent from "../../api/agent";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list(1, 5)
      .then((data) => {
        console.log("data Go:", data);
        setProducts(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.error("error call API:", error));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
