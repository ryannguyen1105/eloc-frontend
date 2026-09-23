import { useEffect, useState } from "react";
import agent from "../../api/agent";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [darkMode, setDarkMode] = useState(true)

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const palleteType = darkMode ? "dark" : "light";
  const darkTheme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });
  useEffect(() => {
    agent.Catalog.list(1, 5)
      .then((data) => {
        console.log("data Go:", data);
        setProducts(Array.isArray(data) ? data : [data]);
      })
      .catch((error) => console.error("error call API:", error));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <NavBar darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode 
          ? 'radial-gradient(circle, #1e3aBa, #111B27)'
          : 'radial-gradient(circle, #baecf9, #f0f9ff)',
          py: 6
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 14 }}>
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;