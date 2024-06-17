import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";

interface State {
  url: string;
  title: string;
  info: string;
  price: string;
}

export default function EditForm() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error("EditForm must be used within a ProductsContextProvider");
  }

  const { editProduct, getOneProduct, oneProduct } = context;
  const { id } = useParams<{ id: string }>();
  const [inputs, setInputs] = useState<State>({
    url: "",
    title: "",
    info: "",
    price: "",
  });

  useEffect(() => {
    if (id) {
      getOneProduct(id);
    }
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setInputs({
        url: oneProduct.url,
        title: oneProduct.title,
        info: oneProduct.info,
        price: String(oneProduct.price),
      });
      console.log("oneProduct updated:", oneProduct);
    }
  }, [oneProduct]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("Input change:", name, value);
  }

  const navigate = useNavigate();

  async function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (id) {
      const newProduct = {
        url: inputs.url,
        title: inputs.title,
        info: inputs.info,
        price: parseFloat(inputs.price),
      };
      editProduct(id, newProduct);
      navigate(`/details/${id}`);
      setInputs({
        url: "",
        title: "",
        info: "",
        price: "",
      });
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        backgroundColor: "#f5f5f5",
        padding: 1,
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
          Форма редактирования
        </Typography>
        <TextField
          required
          onChange={handleChange}
          value={inputs.url}
          name="url"
          placeholder="Ссылка для изображения..."
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          required
          onChange={handleChange}
          value={inputs.title}
          name="title"
          placeholder="Для названия..."
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          required
          onChange={handleChange}
          value={inputs.info}
          name="info"
          placeholder="Для подробной информации..."
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          required
          onChange={handleChange}
          value={inputs.price}
          name="price"
          type="number"
          placeholder="Для цены..."
          sx={{ mb: 3 }}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Редактировать продукт
        </Button>
      </Box>
    </Box>
  );
}
