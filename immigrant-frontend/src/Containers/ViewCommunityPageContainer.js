//react redux
import { connect } from "react-redux";

//component to bind
import CommunityPage from "../Pages/CommunityPage";

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
  selected_community: state.selected_community,
  community_selected: state.selected_community !== null,
  user_logged_in: state.user !== null,
  translations: get_translations(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);
