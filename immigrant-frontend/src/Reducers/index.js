/**

./Reducers/index.js

root script that declares the root redux reducer for state handling

**/

//used for combining multiple redux reducers
import {combineReducers} from 'redux';

//return the rootReducer
export const rootReducer = (state = [], action) => {
  return state;
}
