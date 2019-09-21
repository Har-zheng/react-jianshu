import * as actionTypes from './actionTypes'
import { fromJS } from  'immutable'
import axios from 'axios'
export const searchFoucs = () => ({
  type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
})
const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10) 
})
export const getList =()=> {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      const data = res.data;
      dispatch(changeList(data.data))
      console.log(data)
    }).catch(err => {
      console.log(err)
    })
    console.log(123)
  }
}
export const searchMoseEnter = () => ({
  type: actionTypes.SEARCH_ENTER_MOSEIN
})
export const searchMouseLeave= ()=> ({
  type: actionTypes.SEARCH_LEAVE_MOSEIN
})
export const changePage =(page)=> ({
  type: actionTypes.CHANGE_PAGE,
  page
})