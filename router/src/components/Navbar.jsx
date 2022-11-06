import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="about" className="link">
        About
      </Link>
      <Link to="products" className="link">
        Products
      </Link>
    </nav>
  );
}
