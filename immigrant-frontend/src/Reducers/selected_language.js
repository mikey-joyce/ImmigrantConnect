import { SELECT_LANGUAGE } from "../Constants";

export const selected_language = (state = "EN", action) => {
  switch (action.type) {
    case SELECT_LANGUAGE:
      let { selected_language } = action.payload;
      return selected_language;
    default:
      return state;
  }
};
