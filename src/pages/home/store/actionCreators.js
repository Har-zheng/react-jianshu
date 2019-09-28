import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios' 
const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  LabelList:result.LabelList,
})
const addHomeList = (list, nextPage) => ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})
export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then(res => {
      console.log(res)
      const result = res.data.data;
      const action = changeHomeData(result)
      dispatch(action);
    })
  }
}
export const getMoreList =(page) => {
  return (dispatch) => {
    axios.get(`api/homeList.json?page=${page}`).then(res => {
      const result = res.data.data
      const data = addHomeList(result, page+1)
      dispatch(data)
    })
  }
}
export const toggleTopShow =(isShow) => ({
  type:  actionTypes.TOGGLE_SCROLL_TOP,
  isShow
})