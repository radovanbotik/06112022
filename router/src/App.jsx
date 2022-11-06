import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
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
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
