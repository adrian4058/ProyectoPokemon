import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar(props) {
  
  return (
    <nav className="navbar content">
      <div className="navbar__create">
        {props.currentComponent === "home" ? (
          <Link
            // onClick={handleClick}
            className="navbar__button-create"
            to="/create"
          >
            Crear Pokemon
          </Link>
        ) : (
          <Link
            // onClick={handleClick}
            className="navbar__button-create"
            to="/home"
          >
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
      </div>
    </nav>

    // <nav className>
    //   <ul>
    //     <li>
    //       {pokemons.length > 0 ? (
    //         <p>
    //           <Link to="/create">
    //             <p>Create Pokémon</p>
    //           </Link>{" "}
    //         </p>
    //       ) : null}
    //     </li>
    //   </ul>
    //   <ul>
    //     <li>
    //       {" "}
    //       <a href="https://www.linkedin.com/in/adrian4058">LinkedIn</a>
    //     </li>
    //     <li>
    //       <a href="https://www.github.com/adrian4058">GitHub</a>
    //     </li>
    //     <li>
    //       <Link to="/about">About Me</Link>
    //     </li>
    //   </ul>
    // </nav>
  );
}
