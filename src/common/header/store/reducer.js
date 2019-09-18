import * as actionTypes from './actionTypes'
const defaultSatte={
  focused: false
}
export default (state = defaultSatte, action) => {
  if(action.type === actionTypes.SEARCH_FOCUS){
    return {
      focused: true
    }
  }else if(action.type === actionTypes.SEARCH_BLUR){
    return {
      focused: false
    }
  }
  return state;
}