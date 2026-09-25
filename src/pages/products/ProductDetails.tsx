import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../app/models/product";
import agent from "../../api/agent";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    agent.Catalog.details(Number(id))
      .then((data: Product) => {
        setProduct(data);
      })
      .catch((error) => console.error("Lỗi lấy chi tiết sản phẩm:", error));
  }, [id]); 

  return <div>{product?.name}</div>;
}