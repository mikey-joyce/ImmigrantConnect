/**

./Reducers/index.js

root script that declares the root redux reducer for state handling

**/

//used for combining multiple redux reducers
import { combineReducers } from "redux";

//imported reducers
import { selected_community } from "./selected_community";
import { user } from "./user";
import { selected_language } from "./selected_language";

//return the rootReducer
export const rootReducer = combineReducers({
  selected_community,
  selected_language,
  user
});
