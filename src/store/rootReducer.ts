import { combineReducers } from "@reduxjs/toolkit";
import { ProductDataReducer } from "./slice";
const rootReducer = combineReducers({
  ProductDataReducer: ProductDataReducer,
});
export type RootState = ReturnType<any>;

export default rootReducer;
