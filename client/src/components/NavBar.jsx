import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useSelector } from "react-redux";

export default function NavBar() {
  const pokemons = useSelector((state) => state.allPokemons);
  useEffect(() => {}, [pokemons]);

  return (
    <div className="container">
      <div className="navbar">
        <ul className="left">
          <li>
            {pokemons.length > 0 ? (
              <p>
                <Link to="/create">
                  <p>Create Pokémon</p>
                </Link>{" "}
              </p>
            ) : null}
          </li>
          <li>
            {" "}
            <a href="https://www.linkedin.com/in/adrian4058">LinkedIn</a>
          </li>
          <li>
            <a href="https://www.github.com/adrian4058">GitHub</a>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
