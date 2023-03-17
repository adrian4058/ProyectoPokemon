import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNamePokemons } from "../actions";
import "./SearchBar.css";
import lupa from "./icons/lupa.png";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getNamePokemons(name));
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Buscá tu Pokemón..."
        onChange={handleInputChange}
      />
      <button className="search-submit" type="submit" onClick={handleSubmit}>
        <img src={lupa} alt="lupa" style={{ maxWidth: "30px" }}></img>
      </button>
    </div>
  );
}
