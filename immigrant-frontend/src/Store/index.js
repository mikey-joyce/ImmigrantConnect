/**
./Store/index.js

file that creates the redux store

**/

//redux utils
import { applyMiddleware, createStore } from 'redux';

// import the redux reducer
import {rootReducer} from '../Reducers';

// Logger with default options
import logger from 'redux-logger'

//return the store itself
export const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)
