import { combineReducers } from "redux";
import { TestReducer } from "./reducer";

export const reducer = combineReducers({
    shopData:TestReducer
})