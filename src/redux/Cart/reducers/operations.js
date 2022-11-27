/* eslint-disable no-fallthrough */
/* eslint-disable array-callback-return */

import {
  GET_CART_ITEM,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  EMPTY_CART_ITEM,
} from "../actions";

const initialState = [];

export const operationsCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART_ITEM:
      return [...action.payload];
    case ADD_CART_ITEM:
      return [...state, action.payload];
    case REMOVE_CART_ITEM:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case EMPTY_CART_ITEM:
      return [];
    default:
      return state;
  }
};
