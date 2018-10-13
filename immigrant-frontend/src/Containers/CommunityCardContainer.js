//react redux
import {connect} from 'react-redux';

//redux actions
import {
  selectCommunity
} from '../Actions';

//component to bind
import CommunityCard from '../Components/CommunityCard';

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  selectCommunity: (community) => {
    dispatch(selectCommunity(community));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityCard)
