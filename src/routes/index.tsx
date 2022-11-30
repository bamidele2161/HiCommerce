import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import styled from "styled-components";
import Loader from "../components/loader/loader";
import HomePage from "../pages/homePage";
import ProductPage from "../pages/productPage";
import ViewBag from "../pages/viewBag";
import { Toaster } from "react-hot-toast";

const AppRouter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Routes>
          <Route path="/products" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path=":productId" element={<ProductPage />}></Route>
          </Route>
          <Route path="/view-bag" element={<ViewBag />} />
        </Routes>

        <Toaster
          position="top-right"
          toastOptions={{
            className: "",
            style: {
              margin: "10px",
              padding: "10px",
              display: "inline-flex",
              fontSize: "14px",
              zIndex: 999999,
            },
            duration: 3000,
            error: {
              style: {
                background: "#ff6363",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "red",
              },
            },
            success: {
              style: {
                background: "green",
                color: "white",
              },
              iconTheme: {
                primary: "white",
                secondary: "green",
              },
            },
          }}
        />
      </Router>
    </Suspense>
  );
};

export default AppRouter;
