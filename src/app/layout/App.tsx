import { useEffect, useState } from "react";
import agent from "../../api/agent";
import type { Product } from "../models/product";
import { Container } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list(1, 5)
      .then((data) => {
        console.log("data go", data);
        setProducts(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.error("error call API:", error));
  }, []);

  return (
    <Container maxWidth="xl" sx={{mt: 14}}>
      <Catalog products={products}/>
    </Container>
  );
}

export default App;
