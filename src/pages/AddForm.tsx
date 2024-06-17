import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";

interface State {
  url: string;
  title: string;
  info: string;
  price: string;
}

export default function AddForm() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error(
      "ProductForm must be used within a ProductsContextProvider"
    );
  }

  const { createProduct } = context;
  const [inputs, setInputs] = useState<State>({
    url: "",
    title: "",
    info: "",
    price: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: string
  ) {
    setInputs((prev) => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  }

  const navigate = useNavigate();

  function handleClick(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    createProduct({ ...inputs, price: parseFloat(inputs.price) });
    navigate("/");
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 3,
          p: 3,
        }}
        onSubmit={handleClick}
        component={"form"}
      >
        <Typography variant="h4" sx={{ mb: 2, textAlign: "center" }}>
          Форма добавления
        </Typography>
        <TextField
          required
          onChange={(e) => handleChange(e, "url")}
          value={inputs.url}
          placeholder="Ссылка для изображения..."
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          required
          onChange={(e) => handleChange(e, "title")}
          value={inputs.title}
          placeholder="Для названия..."
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          required
          onChange={(e) => handleChange(e, "info")}
          value={inputs.info}
          placeholder="Для подробной информации..."
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          required
          onChange={(e) => handleChange(e, "price")}
          type="number"
          value={inputs.price}
          placeholder="Для цены..."
          sx={{ mb: 3 }}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Добавить продукт
        </Button>
      </Box>
    </Box>
  );
}
