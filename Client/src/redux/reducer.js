import {
  ADD_FAV,
  REMOVE_FAV,
  ORDER,
  FILTER,
  REMOVE_CHARACTER,
  ADD_CHARACTERS,
  SEARCH_CHARACTER,
} from "./types";

const initialState = {
  allCharactersOrigin: [],
  allCharacters: [],
  myFavorites: [],
  myFavoritesOrigin: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters,action.payload],
      };

    case ADD_CHARACTERS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          allCharactersOrigin: [...action.payload],
          allCharacters: [...action.payload],
        };
      }
      break;
      
      case REMOVE_CHARACTER:
      const newCharacter = state.myFavoritesOrigin.filter(
        (ch) => ch.id !== action.payload
      );
      return {
        ...state,
        myFavorites: newCharacter,
        myFavoritesOrigin: newCharacter,
      };
      
/********************* Reducer para la parte de Favorites ****************************/
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state, state.myFavoritesOrigin, action.payload],
        myFavoritesOrigin: [...state, state.myFavoritesOrigin, action.payload],
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: action.payload,
      };

    case FILTER:
      const chartFilters = state.allCharacters.filter(
        (element) => element.gender === action.payload
      );
      return {
        ...state,
        myFavorites: chartFilters,
      };

    case ORDER:
      const newOrder =
        action.payload === "Ascendente"
          ? state.allCharacters.sort((a, b) => a.id - b.id)
          : state.allCharacters.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: newOrder,
      };

    default:
      return state;
  }
};

// 3. Crea un primer caso llamado "**ADD_FAV**" en el que puedas agregar a un personaje que recibes por payload a tu estado "_myFavorites_".

// 4. Crea otro caso llamado "**REMOVE_FAV**" en el que puedas eliminar a un personaje de tu estado "_myFavorites_" a partir de un **id** que recibas por payload.

// > [**NOTA**]: ten en cuenta que el **`id`** que recibes por payload es un string, y el **`id`** de los personajes es un número.

// 5. No te olvides de tu caso _**default**_.

export default rootReducer;
