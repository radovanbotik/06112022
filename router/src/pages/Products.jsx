import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data";

export default function Products() {
  return (
    <div>
      <h1>Have a Peak at all the glorious products</h1>
      {products.map(cat => {
        return (
          <article
            style={{ display: "grid", placeContent: "center" }}
            key={cat.id}
          >
            <h5>{cat.name}</h5>

            <Link to={`/products/${cat.id}`}>More Info About</Link>
          </article>
        );
      })}
    </div>
  );
}
