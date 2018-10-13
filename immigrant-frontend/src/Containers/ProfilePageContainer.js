//react redux
import {connect} from 'react-redux';

/**redux actions
import {

} from '../Actions';
**/

//component to bind
import ProfilePage from '../Pages/Profile';

const mapStateToProps = (state) => ({
  user_logged_in: (state.user !== null),
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)
