import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
      <footer style={{ "margin-top": "50px" }}>Well this is a footer.</footer>
    </>
  );
}
