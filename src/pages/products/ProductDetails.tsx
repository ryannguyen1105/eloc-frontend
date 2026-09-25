import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../app/models/product";
import agent from "../../api/agent";
import {
  Button,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  const formatVND = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  useEffect(() => {
    if (!id) return;

    agent.Catalog.details(Number(id))
      .then((data: Product) => {
        setProduct(data);
      })
      .catch((error) => console.error("Lỗi lấy chi tiết sản phẩm:", error));
  }, [id]);

  // return <div>{product?.name}</div>;
  if (!product) return <div>Loading...</div>;

  const productDetails = [
    { Label: "Name", value: product.name },
    { Label: "Slug", value: product.slug },
    { Label: "Stock", value: product.stock },
  ];

  return (
    <Grid container spacing={6} sx={{ maxWidth: "lg", mx: "auto" }}>
      <Grid size={6}>
        <img
          src={
            product?.pictureUrl ||
            `https://picsum.photos/seed/${product.id}/300/200`
          }
          // alt={product?.name}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "8px",
          }}
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{product.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4" color="secondary">
          {formatVND(product.price)}
        </Typography>
        <TableContainer>
          <Table
            sx={{
              "& td": { fontSize: "1rem" },
            }}
          >
            <TableBody>
              {productDetails.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {detail.Label}
                  </TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 3,
            alignItems: "center",
            display: "flex",
            flexWrap: "nowrap",
          }}
        ></Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <TextField
            variant="outlined"
            type="number"
            // label="Quantity in basket"
            fullWidth
            defaultValue={1}
          ></TextField>
        </Grid>
        <Grid size={{ xs: 12, sm: 8 }}>
          <Button
            color="primary"
            size="large"
            variant="contained"
            fullWidth
            sx={{ height: "56px" }}
          >
            Thêm vào giỏ
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
