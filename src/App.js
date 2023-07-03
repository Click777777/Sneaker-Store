import "./App.css";
import React from "react";
import Main from "./components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./components/FilteredProduct/FilteredProducts";
import SingleProduct from "./components/FilteredProduct/SingleProduct";
import { useSelector } from "react-redux";
import LoginForm from "./components/Auth/LoginForm";
import ScrollTop from "./ScrollTop";

const App = () => {
  const user = useSelector((state) => state.authSlice.user);

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
