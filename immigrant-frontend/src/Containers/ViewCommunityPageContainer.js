//react redux
import { connect } from "react-redux";

//component to bind
import CommunityPage from "../Pages/CommunityPage";

const mapStateToProps = state => ({
  selected_community: state.selected_community,
  community_selected: state.selected_community !== null,
  user_logged_in: state.user !== null
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage);
