import React, { useContext, useEffect } from "react";
import { Await, useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import { Box, Button } from "@mui/material";

export default function Details() {
  const navigate = useNavigate();
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("Ошибка из UseContext Details");
  }

  const { getOneProduct, deleteProduct, oneProduct } = context;

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  if (!oneProduct) {
    return <h1>Загрузка...</h1>;
  }

  async function handleDelete() {
    deleteProduct(id);
    navigate("/");
  }

  return (
    <Box>
      <img
        style={{ width: "25%", objectFit: "cover" }}
        src={oneProduct.url}
        alt={oneProduct.title}
      />
      <h2>{oneProduct.title}</h2>
      <p>{oneProduct.info}</p>
      <p>{oneProduct.price}</p>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Button onClick={handleDelete} variant="contained">
          Удалить продукт
        </Button>
        <Button
          onClick={() => navigate(`/edit-form/${id}`)}
          variant="contained"
        >
          Редактировать продукт
        </Button>
      </Box>
    </Box>
  );
}
