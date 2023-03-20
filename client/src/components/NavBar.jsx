import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  return (
    <nav className="navbar content">
      <div className="navbar__create">
        {props.currentComponent === "home" ? (
          <Link className="navbar__button-create" to="/create">
            Crear Pokemon
          </Link>
        ) : (
          <Link className="navbar__button-create" to="/home">
            Volver
          </Link>
        )}
      </div>
      <div className="navbar__social about">
        <Link className="navbar__button" to="/about">
          About Me
        </Link>
        <a
          className="navbar__button"
          href="https://www.linkedin.com/in/adrian4058"
        >
          LinkedIn
        </a>
        <a className="navbar__button" href="https://www.github.com/adrian4058">
          GitHub
        </a>
        <a className="navbar__button" href="mailto:adrian_2016_@outlook.es">
          Contacto
        </a>
      </div>
    </nav>
  );
}
