import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import { Box, Pagination, Typography } from "@mui/material";
import agent from "../../api/agent";
import ProductList from "../../pages/products/ProductListPage";

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 5; // Phù hợp với ràng buộc min=5 của backend

  useEffect(() => {
    agent.Catalog.list(page, pageSize)
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((error: unknown) => {
        console.error("Lỗi tải danh sách sản phẩm:", error);
      });
  }, [page]);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
        Danh sách mặt hàng
      </Typography>

      <ProductList products={products} />

      <Pagination 
        count={5} 
        page={page} 
        onChange={handlePageChange} 
        color="primary" 
        size="large"
      />
    </Box>
  );
}