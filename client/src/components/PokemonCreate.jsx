import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPokemon, getType } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./PokemonCreate.css";
function validpokemon(pokemon) {
  let errors = {};
  if (!pokemon.name) {
    errors.name = "Se requiere un nombre";
  }
  return errors;
}

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});

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

  const handleSelect = (e) => {
    setPokemon({
      ...pokemon,
      types: [...pokemon.types, e.target.value],
    });
  };

  const inputChange = (e) => {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validpokemon({
        ...pokemon,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onSubmit = (e) => {
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
  };

  useEffect(() => {
    dispatch(getType());
  }, []);

  return (
    <div>
      <h3 className="title">Crear Pokemon</h3>
      <form className="form" onSubmit={onSubmit}>
        <div>
          <label>Nombre: </label>
          <input
            onChange={inputChange}
            type="text"
            name="name"
            value={pokemon.name}
            className="input"
          />{" "}
          {errors.name && <p className="error"> {errors.name}</p>}
        </div>
        <div>
          <label>Imagen: </label>
          <input
            onChange={inputChange}
            name="image"
            type="text"
            value={pokemon.image}
            className="input"
          />
        </div>
        <div>
          <label>Vida: </label>
          <input
            onChange={inputChange}
            name="hitpoint"
            type="number"
            value={pokemon.hitpoint}
            className="input"
          />
        </div>
        <div>
          <label>Fuerza: </label>
          <input
            onChange={inputChange}
            name="attack"
            type="number"
            value={pokemon.attack}
            className="input"
          />
        </div>
        <div>
          <label>Defensa: </label>
          <input
            onChange={inputChange}
            name="defense"
            type="number"
            value={pokemon.defense}
            className="input"
          />
        </div>
        <div>
          <label>Velocidad: </label>
          <input
            onChange={inputChange}
            name="speed"
            type="number"
            value={pokemon.speed}
            className="input"
          />
        </div>
        <div>
          <label>Altura: </label>
          <input
            onChange={inputChange}
            name="height"
            type="number"
            value={pokemon.height}
            className="input"
          />
        </div>
        <div>
          <label>Peso: </label>
          <input
            onChange={inputChange}
            name="weight"
            type="number"
            value={pokemon.weight}
            className="input"
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
