import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Pages/Home";
import Product from "./Pages/Product";
import AboutUs from "./Pages/AboutUs";

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

      </Routes>
    </Router>
  );
}
