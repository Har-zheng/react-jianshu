import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultSatte= fromJS({
  focused: false,
  list: []
})
export default (state = defaultSatte, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS){
    // immutable 对象的值 回和之前的immutable对象的值 和设置的值 返回一个全新的对象
    return state.set('focused' ,true)
  }else if(action.type === actionTypes.SEARCH_BLUR){
    return state.set('focused', false)
  }else if(action.type === actionTypes.CHANGE_LIST){
    
    return state.set('list', action.data)
  }
  return state;
}