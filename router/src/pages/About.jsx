import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-page">
      <h1>Welcome to About me</h1>
      <h2>It's very empty.</h2>
      <Link to="/" className="link">
        Go back to Homepage.
      </Link>
    </div>
  );
}
