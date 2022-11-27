import { combineReducers } from "redux";
import { operationsReducer } from "./Products/reducers/operations";
import { operationsCartReducer } from "./Cart/reducers/operations";

export const rootReducer = combineReducers({
  operationsReducer,
  operationsCartReducer,
});
