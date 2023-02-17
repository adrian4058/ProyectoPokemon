import React from "react";
import "./Paginado.css";

export default function Paginado({
  pokemonsPerPage,
  allPokemons,
  paginated,
  handleNext,
  handlePrevious,
  currentPage,
  currentPokemons,
}) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(allPokemons / pokemonsPerPage); i++)
    pageNumber.push(i);
  console.log(pageNumber);

  return (
    <nav>
      <button
        disabled={currentPage === 1}
        className="btn"
        onClick={handlePrevious}
      >
        Prev
      </button>
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
      <button
        className="btn"
        disabled={currentPokemons.length < pokemonsPerPage}
        onClick={handleNext}
      >
        Next
      </button>
    </nav>
  );
}
