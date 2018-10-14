//react redux
import { connect } from "react-redux";

//redux actions
import { userLogout } from "../Actions";

//component to bind
import Navbar from "../Pages/Navbar";

const mapStateToProps = state => ({
  user_logged_in: state.user !== null,
  user: state.user
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
