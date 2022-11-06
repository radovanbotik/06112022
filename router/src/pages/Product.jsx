import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data";

export default function Product() {
  const { productID } = useParams();
  const selectedProduct = products.find(product => product.id === productID);
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h2>{selectedProduct.name}</h2>
      <img
        style={{ width: "80px", display: "block" }}
        src={selectedProduct.image}
        alt=""
      />
      <Link to="/products">See other products.</Link>
    </div>
  );
}
