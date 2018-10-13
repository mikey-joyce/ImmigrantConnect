/**
./Actions/index.js

root script for declaring redux actions

**/

//import constants
import {TEST,SELECT_COMMUNITY} from '../Constants';

export const test = () => ({
  type: TEST
})

//community actions
export const selectCommunity = (selected_community) => ({
  type: SELECT_COMMUNITY,
  payload: {
    selected_community
  }
})
