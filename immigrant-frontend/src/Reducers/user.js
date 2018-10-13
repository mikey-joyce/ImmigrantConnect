
import {
  USER_LOGIN
} from '../Constants';

export const user = (state = null, action) => {

  switch (action.type) {
    case USER_LOGIN:
      let {selected_user} = action.payload;
      return selected_user
    default:
      return state;
  }

}
