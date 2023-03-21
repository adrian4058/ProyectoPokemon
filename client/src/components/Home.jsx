import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; //HOOKS!!!
import {
  getPokemons,
  filterPokemonsByType,
  filterCreated,
  filterAttack,
  Sort,
} from "../actions";
import { Link } from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import "./Home.css";
import loading from "./icons/loading.gif";

const INITIAL_PAGE = 1;
const FINAL_PAGE = 12;

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons); //con el use selector traeme en esa constante todo lo que esta en el estado de pokemons
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE); //pagina actual arranca en 1
  const [pokemonsPerPage] = useState(FINAL_PAGE); //pokemons por pagina

  const indexOfFirstPokemon = (currentPage - 1) * pokemonsPerPage; //indice del primer personaje
  const indexOfLastPokemon = indexOfFirstPokemon + pokemonsPerPage; //indice de ultimo personaje
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ); //me trae del reducer todos los personajes en el estado allpokemons
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const handleFilterType = (e) => {
    dispatch(filterPokemonsByType(e.target.value));
  }; ///

  const handleFilterCreated = (e) => {
    dispatch(filterCreated(e.target.value));
  };

  const handleFilterAttack = (e) => {
    dispatch(filterAttack(e.target.value));
  };

  const onSelectsChange = (e) => {
    dispatch(Sort(e.target.value));
  };

  return (
    <div className="home">
      <NavBar currentComponent="home" />
      <div className="home-filter">
        <div className="searchbar">
          <SearchBar />
          <div className="filters">
            FILTROS
            <p>Orden Alfabético: </p>
            <select onChange={onSelectsChange}>
              <option value="Filtro"> Por Defecto </option>
              <option value="Ascendente">Ascendente</option>
              <option value="Descendente">Descendente</option>
            </select>
            <p>Orden por Fuerza: </p>
            <select onChange={handleFilterAttack}>
              <option value="Fuerza"> Por Defecto </option>
              <option value="Mayor fuerza">Mayor fuerza</option>
              <option value="Menor fuerza">Menor fuerza</option>
            </select>
            <p>Orden por Tipo: </p>
            <select onChange={handleFilterType}>
              <option value="type"> Todos los Tipos </option>
              <option value="normal"> Normal </option>
              <option value="flying"> Flying </option>
              <option value="poison"> Poison </option>
              <option value="ground"> Ground </option>
              <option value="bug"> Bug </option>
              <option value="fire"> Fire </option>
              <option value="water"> Water </option>
              <option value="grass"> Grass </option>
              <option value="electric"> Electric </option>
              <option value="fairy"> Fairy </option>
            </select>
            <p>Orden Creados/Existentes: </p>
            <select onChange={handleFilterCreated}>
              <option value="Todos"> Todos </option>
              <option value="Creados"> Creados </option>
              <option value="Existentes"> Existentes </option>
            </select>
            <button className="clear-filtros">
              <a href="/home">Limpiar Filtros</a>
            </button>
          </div>
        </div>
        {allPokemons.length ? (
          <div className="home-content">
            <Paginado
              pokemonsPerPage={pokemonsPerPage}
              allPokemons={allPokemons.length}
              paginated={paginated}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              currentPage={currentPage}
              currentPokemons={currentPokemons}
              indexOfLastPokemon={indexOfLastPokemon}
            />

            {currentPokemons?.map((el) => {
              return (
                <fragment className="fragment">
                  <Link to={"/home/" + el.id}>
                    <Card
                      name={el.name.toUpperCase()}
                      image={el.image}
                      types={el.types}
                      id={el.id}
                    />
                  </Link>
                </fragment>
              );
            })}
            {/* <Paginado
              pokemonsPerPage={pokemonsPerPage}
              allPokemons={allPokemons.length}
              paginated={paginated}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              currentPage={currentPage}
              currentPokemons={currentPokemons}
              indexOfLastPokemon={indexOfLastPokemon}
            /> */}
          </div>
        ) : (
          <div className="home-loading">
            <img src={loading} alt="Loading..." />
          </div>
        )}
      </div>
    </div>
  );
}
