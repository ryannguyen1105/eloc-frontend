import { 
  Button, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Typography 
} from "@mui/material";
import type { Product } from "../../app/models/product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 2, boxShadow: 3 }}>
      <CardMedia
        sx={{ height: 200, objectFit: "cover" }}
        image={`https://picsum.photos/seed/${product.id}/300/200`} 
        title={product.name} 
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
          {product.name} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          SKU: {product.sku}
        </Typography>
        <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
          {product.price.toLocaleString()} 
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button size="small" variant="contained" color="primary">
          Add to cart
        </Button>
        <Button component={Link} to={`/catalog/${product.id}`} size="small" variant="outlined" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  );
}