//react redux
import { connect } from "react-redux";

//redux actions
import { selectLanguage } from "../Actions";

//component to bind
import LanguageSelectPage from "../Pages/InitialPage";

const mapStateToProps = state => ({
  language_selected: state.selected_language !== null
});

const mapDispatchToProps = dispatch => ({
  selectLanguage: selected_language => {
    dispatch(selectLanguage(selected_language));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LanguageSelectPage);
