import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { createPokemon, getType } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";

// function validpokemon(pokemon) {
//   let errors = {};
//   if (!pokemon.name) {
//     errors.name = "Se requiere un nombre";
//   }
//   return errors;
// }

export function PokemonCreate() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [pokemon, setPokemon] = useState({
    name: "",
    types: [],
    image: "",
    hitpoint: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
  });
  function handleSelect(e) {
    setPokemon({
      ...pokemon,
      types: [...pokemon.types, e.target.value],
    });
  }
  function inputChange(e) {
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    dispatch(createPokemon(pokemon));
    alert("Personaje creado con exito");
    setPokemon({
      name: "",
      types: [],
      image: "",
      life: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
    });
    // history.push("/home");
  }
  useEffect(() => {
    dispatch(getType());
  }, []);

  return (
    <div>
      <h3>Crear Pokemon</h3>
      <form onSubmit={onSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            onChange={inputChange}
            type="text"
            name="name"
            value={pokemon.name}
          />
        </div>
        <div>
          <label>Imagen: </label>
          <input
            onChange={inputChange}
            name="image"
            type="text"
            value={pokemon.image}
          />
        </div>
        <div>
          <label>Vida: </label>
          <input
            onChange={inputChange}
            name="hitpoint"
            type="number"
            value={pokemon.hitpoint}
          />
        </div>
        <div>
          <label>Fuerza: </label>
          <input
            onChange={inputChange}
            name="attack"
            type="number"
            value={pokemon.attack}
          />
        </div>
        <div>
          <label>Defensa: </label>
          <input
            onChange={inputChange}
            name="defense"
            type="number"
            value={pokemon.defense}
          />
        </div>
        <div>
          <label>Velocidad: </label>
          <input
            onChange={inputChange}
            name="speed"
            type="number"
            value={pokemon.speed}
          />
        </div>
        <div>
          <label>Altura: </label>
          <input
            onChange={inputChange}
            name="height"
            type="number"
            value={pokemon.height}
          />
        </div>
        <div>
          <label>Peso: </label>
          <input
            onChange={inputChange}
            name="weight"
            type="number"
            value={pokemon.weight}
          />
        </div>
        <p className="types-s">
          <select onChange={handleSelect}>
            {types.map((e) => (
              <option value={e.name}>{e.name}</option>
            ))}{" "}
          </select>
          <ul>
            <li>{pokemon.types.map((e) => e + " , ")}</li>
          </ul>
        </p>
        <Link to="/home">
          <button type="submit" className="atras">
            Atrás
          </button>
        </Link>
        <button type="submit" className="bottom">
          Crear Pokemon
        </button>
      </form>
    </div>
  );
}
