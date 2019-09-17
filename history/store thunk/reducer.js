// 笔记本  如 vue中的  muins 提交
import { CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION  } from './actionTypes'
const defaultState = {
  inputValue: '',
  list: [  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',]
}
// reducer 可以接受  state 但不可修改 state
export default (state = defaultState, action) => {
  console.log(state, action)
  if(action.type === CHANGE_INPUT_VALUE){
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }else if(action.type === ADD_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }else if(action.type === DELETE_TODO_ITEM){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }else if(action.type === INIT_LIST_ACTION){
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }
  return state
}