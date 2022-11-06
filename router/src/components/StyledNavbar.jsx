import React from "react";
import { NavLink } from "react-router-dom";
import "./StyledNavbar.css";
export default function StyledNavbar() {
  const active = ({ isActive }) => {
    return isActive ? "navlink active" : "navlink";
  };

  return (
    <nav className="styled-navbar">
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive ? "navlink active" : "navlink";
        }}
      >
        Home
      </NavLink>
      <NavLink to="about" className={active}>
        About
      </NavLink>
      <NavLink to="products" className={active}>
        Products
      </NavLink>
    </nav>
  );
}
