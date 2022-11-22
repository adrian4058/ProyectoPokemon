import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <Link to="/"></Link>
      <div>
        <Link to="/create">Crear Pokemon</Link>
      </div>
    </header>
  );
}
