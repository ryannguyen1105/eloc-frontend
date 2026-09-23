import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography 
} from "@mui/material";
import type { Product } from "../../app/models/product";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        sx={{ height: 200, objectFit: "cover" }}
        image={`https://picsum.photos/seed/${product.ID}/300/200`} // Dùng ID viết hoa
        title={product.Name} // Dùng Name viết hoa
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {product.Name} {/* Dùng Name viết hoa */}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          SKU: {product.Sku} {/* Dùng Sku viết hoa */}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          {product.Price.toLocaleString()} đ {/* Dùng Price viết hoa */}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button size="small" variant="contained" color="primary">
          Add to cart
        </Button>
        <Button size="small" variant="outlined" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
}