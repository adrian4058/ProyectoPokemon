import React from "react";
import "./NotFound.css";
import notfound from "./icons/notfound.png";
import NavBar from "./NavBar";

export default function NotFound() {
  return (
    <div className="not-found">
      <NavBar />
      <div className="not-found-content">
        <div className="not-found-container">
          <h1>404 - Página no encontrada</h1>
          <p>Lo sentimos, la página que estás buscando no existe.</p>
          <img src={notfound} alt="img not found" />
        </div>
      </div>
    </div>
  );
}
