import axios from "axios";
const GET_POKEMONS = "GET_POKEMONS";
const FILTER_BY_TYPE = "FILTER_BY_TYPE";
const FILTER_CREATED = "FILTER_CREATED";
const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
const SORT = "SORT";

export function getPokemons() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/pokemons", {});
    return dispatch({
      type: GET_POKEMONS,
      payload: json.data,
    });
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
}

export function filterCreated(payload) {
  return {
    type: FILTER_CREATED,
    payload,
  };
}

export function filterAttack(payload) {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
}

export function Sort(order) {
  return {
    type: SORT,
    payload: order,
  };
}
