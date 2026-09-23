import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Product } from "../../app/models/product";

type Props = {
    product: Product;
};

export default function ProductCard({ product }: Props) {
    const id = product.ID;
    const name = product.Name && product.Name.trim() !== "" ? product.Name : "Chưa có tên";
    const sku = product.Sku || "";
    const numericPrice = Number(product.Price ?? 0);
    
    const formattedPrice = !isNaN(numericPrice) 
        ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericPrice) 
        : "0 ₫";

    return (
        <Card
            id={`product-${id}`}
            elevation={3}
            sx={{ 
                width: 280,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <CardMedia
                sx={{ height: 240, backgroundSize: 'cover' }}
                image={`https://picsum.photos/seed/${id || sku}/300/200`}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.primary' }} variant="subtitle2">
                    {name}
                </Typography>
                <Typography variant="h6" sx={{ color: 'secondary.main' }}>
                    {formattedPrice}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Button>Add to cart</Button>
                <Button>View</Button>
            </CardActions>
        </Card>
    );
}