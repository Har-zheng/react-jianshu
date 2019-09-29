import {
  fromJS
} from 'immutable'

import * as constants from './constants'
const defaultSatte = fromJS({
  login: false
})

export default (state = defaultSatte, action) => {
  console.log(action)
  switch (action.type) {
    case constants.CHANEG_LOGIN:
      return state.set('login', action.value)
    case constants.LOGOOUT:
      return state.set('login', action.value)
    default:
      return state
  }
}