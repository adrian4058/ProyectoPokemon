import React from "react";
import "./Paginado.css";

export default function Paginado({ pokemonsPerPage, allPokemons, paginated }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++)
    pageNumber.push(i);

  return (
    <nav>
      <ul className="paginado">
        {pageNumber &&
          pageNumber.map((number) => (
            <li className="number" key={number}>
              <button className="btn" onClick={() => paginated(number)}>
                {number}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
}
