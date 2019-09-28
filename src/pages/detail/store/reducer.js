import {
  fromJS
} from 'immutable'

import * as actionTypes from './actionTypes'

const defaultSatte = fromJS({
  title: '',
  content: ''
});

export default (state = defaultSatte, action) => {
  switch (action.type) {
    case actionTypes.ACTION_DETAIL:
      return  state.merge({
        title: fromJS(action.title),
        content: fromJS(action.content)
      })
    default:
      return state
  }
}