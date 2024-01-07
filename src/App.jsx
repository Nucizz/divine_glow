import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import Product from "./Pages/Product";
import AboutUs from "./Pages/AboutUs";
import ProductDetails from "./Pages/ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <Navigate to="/home" />
          }
        />

        <Route
          path="*"
          element={
            <Navigate to="/home" />
          }
        />

        <Route
          path="/home"
          element={
            <Home />
          } />

        <Route
          path="/product"
          element={
            <Product />
          } />

        <Route
          path="/aboutus"
          element={
            <AboutUs />
          } />

        <Route
          path="/product/:productName"
          element={<ProductDetails />}
        />

      </Routes>
    </BrowserRouter>
  );
}
