
import {
  SELECT_COMMUNITY
} from '../Constants';

export const selected_community = (state = null, action) => {

  switch (action.type) {
    case SELECT_COMMUNITY:

      let {selected_community} = action.payload;
      return selected_community;
      
    default:
      return state;
  }

}
