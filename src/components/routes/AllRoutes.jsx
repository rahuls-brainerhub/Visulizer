import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import PrivateLayout from "../layouts/PrivateLayout";
import ForgotPasswordPage from "../pages/ForgotPassword";
import RegistrationPage from "../pages/RegistrationPage";
import ProductListingPage from "../pages/product/ProductListingPage";
import ProductDetailPage from "../pages/product/ProductDetailPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateLayout>
              <HomePage />
            </PrivateLayout>
          }
        />
         <Route
          path="/products/all"
          element={
            <PrivateLayout>
              <ProductListingPage />
            </PrivateLayout>
          }
        />
         <Route
          path="/product/:id"
          element={
            <PrivateLayout>
              <ProductDetailPage />
            </PrivateLayout>
          }
        />
        <Route
          path="/login"
          element={
            <PublicLayout>
              <LoginPage />
            </PublicLayout>
          }
        />
        <Route
          path="/create-account"
          element={
            <PublicLayout>
              <RegistrationPage />
            </PublicLayout>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <PublicLayout>
              <ForgotPasswordPage />
            </PublicLayout>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
