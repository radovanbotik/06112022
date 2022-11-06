import React from "react";
import { Link } from "react-router-dom";
export default function Products() {
  return (
    <div>
      <h1>Have a Peak at all the glorious products</h1>
      <Link to="/" className="link">
        Return Home
      </Link>
    </div>
  );
}
