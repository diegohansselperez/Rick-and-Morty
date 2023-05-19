import { ADD_FAV, REMOVE_FAV, ORDER, FILTER,REMOVE_CHARACTER ,ADD_CHARACTERS, SEARCH_CHARACTER } from "./types";

import axios from "axios";

export function addCharacters(characters) {
  return {
    type: ADD_CHARACTERS,
    payload: characters,
  };
}
export function searchCharacter(character) {
  return {
    type: SEARCH_CHARACTER,
    payload: character,
  };
}

export function removeCharacter(id) {
  return {
    type: REMOVE_CHARACTER,
    payload: id,
  };
}

export function addFav(character) {
  const entrepoint = "http://localhost:3001/rickandmorty/favorite";
  return async (dispatch) => {
    try {
      const { data } = await axios.post(entrepoint, character);

      if (!data.length) throw new Error("No hay favoritos");

      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      console.error("addFav axios: " + error.message);
    }
  };
}

export function removeFav(id) {
  const entrepoint = "http://localhost:3001/rickandmorty/favorite";
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`${entrepoint}/${id}`);
      // if (!data.length) throw Error("No hay favoritos removidos");
      console.log("removeFav", data);

      dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      console.error("removeFav axios: " + error.message);
    }
  };
}

export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(id) {
  return {
    type: ORDER,
    payload: id,
  };
}

