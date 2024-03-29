import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// git push -> Nucizz
// git push deploy -> Jumpbeeid

import Home from "./Pages/Home";
import Product from "./Pages/Product";
import AboutUs from "./Pages/AboutUs";
import ProductDetails from "./Pages/ProductDetails";

export default function App() {
  return (
    <Router>
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
    </Router>
  );
}
