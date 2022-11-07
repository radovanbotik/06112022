import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { children, user } = props;

  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}
