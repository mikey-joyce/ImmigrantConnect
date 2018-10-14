import { USER_LOGIN, USER_LOGOUT } from "../Constants";

export const user = (state = null, action) => {
  switch (action.type) {
    case USER_LOGIN:
      let { selected_user } = action.payload;
      return selected_user;
    case USER_LOGOUT:
      return null;
    default:
      return state;
  }
};
