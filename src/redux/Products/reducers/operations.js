/* eslint-disable no-fallthrough */
/* eslint-disable array-callback-return */

import { GET_ITEM, ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../actions";

const initialState = [
  {
    productname: "Cheese Cake",
    img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZXNlY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: "98",
    description:
      "Justo et ipsum nonumy est consetetur est sit lorem lorem labore. Nonumy dolores clita et eos sed. Dolore no stet.",
    vendor: "Jai_Sehgal",
    id: 1,
  },
  {
    productname: "Bread",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description:
      "Dwelt he his hill uses her but. Since from such whilome aye known made the one of. And soon congealed.",
    price: "20",
    vendor: "Sahil",
    id: 2,
  },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEM:
      return [...action.payload];
    case ADD_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      const filteredTodos = state.filter((todo) => todo.id !== action.payload);
      return filteredTodos;
    case UPDATE_ITEM:
      let data = action.payload;
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.productname = data.productname;
          item.img = data.img;
          item.description = data.description;
          item.price = data.price;
          item.vendor = data.vendor;
        }
        updatedArray.push(item);
      });
    default:
      return state;
  }
};
