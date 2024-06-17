import React, { useContext, useEffect } from "react";
import { Product, ProductsContext } from "../contexts/ProductsContext";
import { Box } from "@mui/material";
import { idText } from "typescript";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "ProductForm must be used within a ProductsContextProvider"
    );
  }

  // lalalalala

  const { getProducts, products } = context;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginTop: "50px",
          gap: "20px",
          padding: "0 15px",
        }}
      >
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
}
