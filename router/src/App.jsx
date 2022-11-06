import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Products from "./pages/Products";
import SharedLayout from "./pages/SharedLayout";
import "./App.css";

function App() {
  //1.BrowserRouter connects app to browser
  //2.Routes is parent for individual Routes
  //3.Route for individual pages
  // Route needs 2 attributes path='' to specify URL
  // and element/component which we want to render
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="different" element={<h2>different route</h2>}>
          <Route
            path="nested"
            element={
              <h2>route nested inside different route outside homepage.</h2>
            }
          />
        </Route>
      </Routes>
      {/* <footer style={{ "margin-top": "30px" }}>
        This Footer Is Displayed Across The App Regardless of the Route.
      </footer> */}
    </BrowserRouter>
  );
}

export default App;
