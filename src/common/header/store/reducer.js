import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultSatte= fromJS({
  focused: false,
  moseIn: false,
  list: [],
  page: 0,
  totalPage:1
})
export default (state = defaultSatte, action) => {
  switch(action.type){
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused' ,true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.merge({ // immutable merge  提供修改多个数据的属性
        list: action.data,
        totalPage: action.totalPage
      })
    case actionTypes.SEARCH_ENTER_MOSEIN:
      return state.set('moseIn',true)
    case actionTypes.SEARCH_LEAVE_MOSEIN:
      return state.set('moseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state
  }
}