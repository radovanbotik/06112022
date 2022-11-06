import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import StyledNavbar from "../components/StyledNavbar";
export default function SharedLayout() {
  return (
    <>
      <StyledNavbar />
      <Outlet />
      <footer style={{ marginTop: "50px" }}>Well this is a footer.</footer>
    </>
  );
}
