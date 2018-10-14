//react redux
import {connect} from 'react-redux';

//component to bind
import CreateEvent from '../Pages/CreateEvent';

const mapStateToProps = (state) => ({
  selected_community: state.selected_community,
  logged_in_user: state.user,
  user_logged_in: (state.user !== null),
  community_selected: (state.selected_community !== null)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEvent)
