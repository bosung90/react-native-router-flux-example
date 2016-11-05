// @flow
import {combineReducers} from 'redux'
import nav, * as fromNav from './navReducer'
import home, * as fromHome from './homeReducer'

export default combineReducers({
  nav,
  home,
})

export const getNav = ({nav}) => nav
export const getHome = ({home}) => home
