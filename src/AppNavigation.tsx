import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddForm from "./pages/AddForm";
import Header from "./components/Header";
import Details from "./pages/Details";
import EditForm from "./pages/EditForm";

export default function AppNavigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="add-form" element={<AddForm />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="edit-form/:id" element={<EditForm />} />
      </Routes>
    </BrowserRouter>
  );
}
