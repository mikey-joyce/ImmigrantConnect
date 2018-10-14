/**
./Actions/index.js

root script for declaring redux actions

**/

//import constants
import { TEST, SELECT_COMMUNITY, USER_LOGIN, USER_LOGOUT } from "../Constants";

export const test = () => ({
  type: TEST
});

//community actions
export const selectCommunity = selected_community => ({
  type: SELECT_COMMUNITY,
  payload: {
    selected_community
  }
});

//user actions
export const userLogin = selected_user => ({
  type: USER_LOGIN,
  payload: {
    selected_user
  }
});

export const userLogout = () => ({
  type: USER_LOGOUT
});
