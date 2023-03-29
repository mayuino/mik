import { combineReducers, legacy_createStore } from "redux";
import { infoReducer } from "./recruite_info";

export const store = legacy_createStore(
  combineReducers({
    info: infoReducer,
    
  }));