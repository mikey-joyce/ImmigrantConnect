//react redux
import { connect } from "react-redux";

//redux actions
import { selectCommunity } from "../Actions";

//component to bind
import CommunityCard from "../Components/CommunityCard";

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

const mapDispatchToProps = dispatch => ({
  selectCommunity: community => {
    dispatch(selectCommunity(community));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityCard);
