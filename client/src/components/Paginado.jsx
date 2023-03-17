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
      <ul className="paginado">
        <li className="number">
          <button
            disabled={currentPage === 1}
            className="btn"
            onClick={handlePrevious}
          >
            {"Prev"}
          </button>
        </li>

        {pageNumber &&
          pageNumber.map((number) => (
            <li className="number" key={number}>
              <button
                className={currentPage === number ? "btn-current" : "btn"}
                onClick={() => paginated(number)}
              >
                {number}
              </button>
            </li>
          ))}
        <li className="number">
          <button
            className="btn"
            disabled={currentPokemons.length < pokemonsPerPage}
            onClick={handleNext}
          >
            {"Next"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
