import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import "./App.css";

function App() {
  //1.BrowserRouter connects app to browser
  //2.Routes is parent for individual Routes
  //3.Route for individual pages
  // Route needs 2 attributes path='' to specify URL
  // and element/component which we want to render

  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productID" element={<Product />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="dashboard" element={<Dashboard user={user} />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
      {/* <footer style={{ "margin-top": "30px" }}>
        This Footer Is Displayed Across The App Regardless of the Route.
      </footer> */}
    </BrowserRouter>
  );
}

export default App;
