//react redux
import { connect } from "react-redux";

//component to bind
import CommunitiesPage from "../Pages/CommunitiesPage";

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
  translations: get_translations(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunitiesPage);
