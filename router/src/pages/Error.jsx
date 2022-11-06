import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error-page">
      <h1>404.</h1>
      <h2>Are you lost?</h2>
      <Link to="/" className="link">
        Return to homepage
      </Link>
    </div>
  );
}
