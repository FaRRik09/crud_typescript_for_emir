import React from "react";
import AppNavigation from "./AppNavigation";
import ProductsContextProvider from "./contexts/ProductsContext";



export default function App() {
  let firstName = "Baisal";
  let lastName: string = "Kaldybaev";
  let id: number = 10;
  let isInCart: boolean = false;

  // Если функция что-то возвращает + типизировали параметр
  function sayHello(name: string): string {
    return `Привет ${name}!`;
  }

  // console.log(sayHello("Baisal"));

  // Если функция ничего не возвращает, используется тип void
  function sayMyName(name: string): void {
    console.log(name);
  }
  // sayMyName("Medet");

  // Типизация объектов
  let user: {
    firstName: string;
    age: number;
    city: string;
    role: string;
  } = {
    firstName: "Baisal",
    age: 18,
    city: "Bishkek",
    role: "Student",
  };

  interface Product {
    id: number;
    title: string;
    info: string;
    price: number;
  }

  let product: Product = {
    id: 1,
    title: "Iphone 15 pro max",
    info: "Bishkek",
    price: 1200,
  };

  return (
    <ProductsContextProvider>
      <AppNavigation />
    </ProductsContextProvider>
  );
}
