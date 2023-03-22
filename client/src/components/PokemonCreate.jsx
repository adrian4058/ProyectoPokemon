import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPokemon, getType } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./PokemonCreate.css";
import NavBar from "./NavBar";

const validpokemon = (pokemon) => {
  let errors = {};
  if (!pokemon.name) {
    errors.name = "Se requiere un nombre.";
  }
  if (pokemon.hitpoint < 1) {
    errors.hitpoint = "Vida debe ser mayor a 0.";
  }
  if (!pokemon.image) {
    errors.image = "Se requiere link de imágen.";
  }
  if (pokemon.attack < 1) {
    errors.attack = "Ataque debe ser mayor a 0.";
  }
  if (pokemon.defense < 1) {
    errors.defense = "Defensa debe ser mayor a 0.";
  }
  if (pokemon.speed < 1) {
    errors.speed = "Velocidad debe ser mayor a 0.";
  }
  if (pokemon.weight < 1) {
    errors.weight = "Peso debe ser mayor a 0.";
  }

  if (pokemon.height < 1) {
    errors.height = "Altura debe ser mayor a 0.";
  }
  if (!pokemon.types.length) {
    errors.types = "Se requiere al menos un tipo.";
  }
  for (const key in errors) {
    return { [key]: errors[key] };
  }
  return {};
};

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});
  const [selectedCount, setSelectedCount] = useState(0);

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
    const selectedType = e.target.value;

    // Actualiza el estado de Pokemon con el nuevo tipo seleccionado
    setPokemon((prevPokemon) => ({
      ...prevPokemon,
      types: [...prevPokemon.types, selectedType],
    }));

    // Incrementa el contador de selección
    setSelectedCount((prevCount) => prevCount + 1);

    // Deshabilita el select si se han seleccionado dos opciones
    if (selectedCount >= 1 && selectedCount + 1 >= 2) {
      const options = Array.from(e.target.options);
      const unselectedOptions = options.filter((option) => !option.selected);
      unselectedOptions.forEach((option) => {
        option.disabled = true;
      });
    }
  };

  const inputChange = (e) => {
    e.preventDefault();
    setPokemon({
      ...pokemon,
      [e.target.name]: e.target.value,
    });
    setErrors((prevState) => {
      const newErrors = validpokemon({
        ...pokemon,
        [e.target.name]: e.target.value,
      });
      const firstKey = Object.keys(newErrors)[0];
      return firstKey ? { [firstKey]: newErrors[firstKey] } : {};
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemon(pokemon));
    // alert("Personaje creado con exito");
    setPokemon({
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
  };

  useEffect(() => {
    dispatch(getType());
  }, []);

  return (
    <div className="form">
      <NavBar currentComponent="pokemonCreate" />
      <div className="form-content">
        <div className="form-title">
          <h3 className="title">Crea tu Pokémon</h3>
          <form className="form-submit" onSubmit={onSubmit}>
            <div className="form-total">
              <div className="children-one margin">
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
                  <label htmlFor="">Imagen: </label>
                  <input
                    onChange={inputChange}
                    name="image"
                    type="text"
                    value={pokemon.image}
                    className="input"
                  />{" "}
                  {errors.image && <p className="error"> {errors.image}</p>}
                </div>
                <div>
                  <label htmlFor="">Vida: </label>
                  <input
                    onChange={inputChange}
                    name="hitpoint"
                    type="number"
                    value={pokemon.hitpoint}
                    className="input"
                  />{" "}
                  {errors.hitpoint && (
                    <p className="error"> {errors.hitpoint}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="">Fuerza: </label>
                  <input
                    onChange={inputChange}
                    name="attack"
                    type="number"
                    value={pokemon.attack}
                    className="input"
                  />{" "}
                  {errors.attack && <p className="error"> {errors.attack}</p>}
                </div>
              </div>
              <div className="children-two margin">
                <div>
                  <label htmlFor="">Defensa: </label>
                  <input
                    onChange={inputChange}
                    name="defense"
                    type="number"
                    value={pokemon.defense}
                    className="input"
                  />{" "}
                  {errors.defense && <p className="error"> {errors.defense}</p>}
                </div>
                <div>
                  <label htmlFor="">Velocidad: </label>
                  <input
                    onChange={inputChange}
                    name="speed"
                    type="number"
                    value={pokemon.speed}
                    className="input"
                  />{" "}
                  {errors.speed && <p className="error"> {errors.speed}</p>}
                </div>
                <div>
                  <label htmlFor="">Altura: </label>
                  <input
                    onChange={inputChange}
                    name="height"
                    type="number"
                    value={pokemon.height}
                    className="input"
                  />{" "}
                  {errors.height && <p className="error"> {errors.height}</p>}
                </div>
                <div>
                  <label htmlFor="">Peso: </label>
                  <input
                    onChange={inputChange}
                    name="weight"
                    type="number"
                    value={pokemon.weight}
                    className="input"
                  />{" "}
                  {errors.weight && <p className="error"> {errors.weight}</p>}
                </div>
              </div>
              <p className="types-s margin">
                <select onChange={handleSelect}>
                  {types.map((e) => (
                    <option value={e.name}>{e.name}</option>
                  ))}
                </select>
                <ul>
                  <li>{pokemon.types.map((e) => e + " , ")}</li>
                </ul>
              </p>{" "}
              {errors.types && <p className="error"> {errors.types}</p>}
              <div className="buttons argin">
                <Link to="/home">
                  <button type="submit" className="atras">
                    Atrás
                  </button>
                </Link>
                <button type="submit" className="bottom">
                  Crear Pokemon
                </button>
                <a href="/create">Limpiar Form</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
