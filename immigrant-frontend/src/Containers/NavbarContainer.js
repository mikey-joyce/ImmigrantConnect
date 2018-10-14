//react redux
import { connect } from "react-redux";

//redux actions
import { userLogout } from "../Actions";

//component to bind
import Navbar from "../Pages/Navbar";

//language data
import lang_data from "../Data/translations.json";

import _ from "lodash";

const get_translations = state => {
  var lang = _.find(lang_data, function(lang) {
    return lang.language == state.selected_language;
  });

  return lang.translations;
};

const mapStateToProps = state => ({
  user_logged_in: state.user !== null,
  user: state.user,
  translations: get_translations(state)
});

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(userLogout());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
