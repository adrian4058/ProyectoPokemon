import React from "react";

export default function Paginado({ pokemonsPerPage, allPokemons, paginated }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++)
    pageNumber.push(i);

  return (
    <nav>
      <ul className="paginated">
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
