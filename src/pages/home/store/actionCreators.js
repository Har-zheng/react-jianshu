import * as actionTypes from './actionTypes'
import axios from 'axios' 
const changeHomeData = (result) => ({
  type: actionTypes.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  LabelList:result.LabelList,
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