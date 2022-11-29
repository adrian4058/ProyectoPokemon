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

const INITIAL_PAGE = 1;
const FINAL_PAGE = 12;

export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons); //con el use selector traeme en esa constante todo lo que esta en el estado de pokemons
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE); //pagina actual arranca en 1
  const [pokemonsPerPage] = useState(FINAL_PAGE); //pokemons por pagina
  const indexOfLastPokemon = currentPage * pokemonsPerPage; //indice de ultimo personaje
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage; //indice del primer personaje
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  ); //me trae del reducer todos los personajes en el estado allpokemons
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]); //condicion de corte, siempre y cuando tenga dispatch se ejecuta

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

  // const onClose = (e) => {
  //   dispatch(deleteCard(e.target.value));
  // };

  return (
    <div>
      <NavBar />
      <SearchBar className="search" />
      <h1>Pokemon APP</h1>
      <div>
        <select onChange={onSelectsChange}>
          <option value="Filtro"> A-Z:</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleFilterAttack}>
          <option value="Fuerza"> Fuerza </option>
          <option value="Mayor fuerza">Mayor fuerza</option>
          <option value="Menor fuerza">Menor fuerza</option>
        </select>
        <select onChange={handleFilterType}>
          <option value="type"> Tipo </option>
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
        <select onChange={handleFilterCreated}>
          <option value="Todos"> Todos </option>
          <option value="Creados"> Creados </option>
          <option value="Existentes"> Existentes </option>
        </select>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginated={paginated}
        />

        {currentPokemons?.map((el) => {
          return (
            // <fragment>
              <Link to={"/home/" + el.id}>
                <Card
                  name={el.name[0].toUpperCase() + el.name.slice(1)}
                  image={el.image}
                  types={el.types}
                  
            
                />
              </Link>
            // </fragment>
          );
        })}
        {/* <button onClick={handleNextPage}>Next Page</button> */}
      </div>
    </div>
  );
}
