import React from "react";

export default function Paginado({ pokemonsPerPage, allPokemons, paginated }) {
  const pageNumber = [];
  for (let i = 0; i <= Math.ceil(allPokemons / pokemonsPerPage); i++)
    pageNumber.push(i + 1);

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
