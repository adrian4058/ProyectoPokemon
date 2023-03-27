import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPokemon, getType } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./PokemonCreate.css";
import NavBar from "./NavBar";
import { useHistory } from "react-router-dom";

export default function PokemonCreate() {
  const history = useHistory();

  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [errors, setErrors] = useState({});
  const [selectedType, setSelectedType] = useState(null);
  const [formComplete, setFormComplete] = useState(false);

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

  const validpokemon = (pokemon) => {
    console.log(pokemon);
    console.log(pokemon.types.length);
    let errors = {};
    if (!pokemon.name) {
      errors.name = "Se requiere un nombre.";
    }
    if (pokemon.hitpoint < 1) {
      errors.hitpoint = "Vida debe ser mayor a 0.";
    }
    if (typeof pokemon.image !== "string") {
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
    if (pokemon.types.length === 0) {
      errors.types = "Se requiere al menos un tipo.";
    }
    for (const key in errors) {
      return { [key]: errors[key] };
    }
    return {};
  };

  const handleSelect = (e) => {
    const selectedType = e.target.value;

    // Actualiza el estado de Pokemon con el nuevo tipo seleccionado
    setPokemon((prevPokemon) => ({
      ...prevPokemon,
      types: [...prevPokemon.types, selectedType],
    }));

    // Actualiza el estado de selectedType
    setSelectedType(selectedType);

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

  const checkFormCompletion = () => {
    const formFields = Object.values(pokemon);
    const incompleteFields = formFields.filter(
      (field) => field === "" || field === 0
    );
    if (incompleteFields.length === 0) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
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
    checkFormCompletion();
  };

  function handleCreate() {
    alert("¡Pokémon creado con éxito!");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createPokemon(pokemon));

    setPokemon({
      name: "",
      types: pokemon.types,
      image: "",
      hitpoint: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
    });
    history.push("/home");
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
              <div className="children-one ">
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
              <div className="children-two ">
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
                  {console.log(pokemon.weight)}
                  {errors.weight && <p className="error"> {errors.weight}</p>}
                </div>
              </div>
              <p className="types-s ">
                <select onChange={handleSelect}>
                  {types.map((e) => (
                    <option value={e.name}>{e.name}</option>
                  ))}
                </select>

                <ul>
                  <li>{pokemon.types.map((e) => e.toUpperCase() + ", ")}</li>
                </ul>
                {errors.types && selectedType === null && (
                  <p className="error-type"> {errors.types}</p>
                )}
              </p>{" "}
              <div className="buttons">
                <div className="clean-form">
                  <a className="atras" href="/create">
                    Limpiar Form
                  </a>
                </div>
                <div className="create-back">
                  <Link to="/home">
                    <button type="submit" className="bottom">
                      Atrás
                    </button>
                  </Link>
                  <button
                    disabled={!formComplete}
                    className="bottom"
                    type="submit"
                    onClick={handleCreate}
                  >
                    Crear Pokemon
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
