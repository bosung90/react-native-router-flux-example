import Card from './Card'
import * as actions from './actions'
import {connect} from 'react-redux'
import {getNav} from '../reducers'
import {Text} from 'react-native'

const mapStateToProps = (state, props)=> {
  return {
    ...getNav(state),
  }
}

const mapDispatchToProps = {
  ...actions,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)
