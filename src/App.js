import "./App.css";
import React from "react";
import Main from "./components/Main/Main";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FilteredProduct/FilteredProducts";
import SingleProduct from "./components/FilteredProduct/SingleProduct";
import { useSelector } from "react-redux";
import LoginForm from "./components/Auth/LoginForm";
import ScrollTop from "./ScrollTop";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const user = useSelector((state) => state.authSlice.user);

  function someRequest() {
    //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise((resolve) => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={user.auth ? <Main /> : <LoginForm />} />
          <Route path="/filteredProduct/:type" element={<FilteredProducts />} />
          <Route
            path="/filteredProduct/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
