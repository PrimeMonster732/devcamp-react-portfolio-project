import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h2>Wahahaha! The page you searched for doesn't exist!</h2>
      <Link to="/">Return to homepage!</Link>
    </div>
  );
}