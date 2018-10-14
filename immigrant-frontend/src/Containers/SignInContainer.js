//react redux
import { connect } from "react-redux";

//redux actions
import { userLogout, userLogin } from "../Actions";

//component to bind
import SignInPage from "../Pages/SignIn";

const mapStateToProps = state => ({
  user_logged_in: state.user !== null,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  login: user => {
    dispatch(userLogin(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInPage);
