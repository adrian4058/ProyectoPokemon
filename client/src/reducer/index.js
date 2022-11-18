const GET_POKEMONS = "GET_POKEMONS";
const FILTER_BY_TYPE = "FILTER_BY_TYPE";
const FILTER_CREATED = "FILTER_CREATED";
const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
const SORT = "SORT";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
};

function rootReducers(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case FILTER_BY_TYPE:
      const allPokemons = state.allPokemons;
      const typeFiltered =
        action.payload === "type"
          ? allPokemons
          : allPokemons.filter((e) => e.types.includes(action.payload));
      return {
        ...state,
        pokemons: typeFiltered,
      };
    case FILTER_CREATED:
      const createdFilter =
        action.payload === "Creados"
          ? state.allPokemons.filter((e) => e.id.length > 2)
          : state.allPokemons.filter((e) => e.id <= 40);
      return {
        ...state,
        pokemons:
          action.payload === "Todos" ? state.allPokemons : createdFilter,
      };
    case ORDER_BY_ATTACK:
      let attackFilter = [...state.pokemons];
      attackFilter = attackFilter.sort((a, b) => {
        if (a.attack < b.attack) {
          return action.payload === "Mayor fuerza" ? 1 : -1;
        }
        if (a.attack > b.attack) {
          return action.payload === "Mayor fuerza" ? -1 : 1;
        }
        return 0;
      });
      return {
        ...state,
        pokemons:
          action.payload === "Fuerza" ? state.allPokemons : attackFilter,
      };
    case SORT:
      let orderedCharacters = [...state.pokemons];
      orderedCharacters = orderedCharacters.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === "Ascendente" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "Ascendente" ? 1 : -1;
        }
        return 0;
      });

      return {
        ...state,
        pokemons:
          action.payload === "Filtro" ? state.allPokemons : orderedCharacters,
      };

    default: {
      return state;
    }
  }
}

export default rootReducers;
