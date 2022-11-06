import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to my Homepage!</h1>
      <h2>It's very cosy.</h2>
      <Link to="/about" className="link">
        Visit About Page
      </Link>
    </div>
  );
}
