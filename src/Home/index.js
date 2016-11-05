import Home from './Home'
import * as actions from './actions'
import {connect} from 'react-redux'
import {getNav, getHome} from '../reducers'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
    ...getHome(state),
  }
}

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
